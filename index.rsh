'reach 0.1';

const CommonInterface = {
    seeEnd: Fun([], Null)
};

const foldingPrice = (arr, price) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += (i + 1) * price;
    }
    return result;
};

export const main =
    Reach.App(
        {},
        [Participant('Creator',
            {
                ...CommonInterface,
                price: UInt,
                shouldEnd: Fun([], Bool),
            }),
        ParticipantClass('Player',
            {
                ...CommonInterface,
                getMove: Fun([], Array(UInt, 10)),
                seeMove: Fun([Array(UInt, 10)], Null),
            }),
        ],
        (Creator, Player) => {
            Creator.only(() => {
                const price = declassify(interact.price);
            });
            Creator.publish(price);

            var [keepGoing] = [true];
            invariant(balance() == 0);
            while (keepGoing) {
                commit();

                fork()
                    .case(Creator, (() => ({
                        when: declassify(interact.shouldEnd()),
                    })),
                        () => {
                            keepGoing = false;
                            continue;
                        })
                    .case(Player, (() => {
                        const msg = declassify(interact.getMove());
                        const when = msg != 0;
                        return { msg, when };
                    }),
                        (v => foldingPrice(v, price)),
                        (move) => {
                            Player.only(() =>
                                interact.seeMove(move));
                            transfer(price).to(Creator);
                            continue;
                        })
                    .timeout(1024, () => {
                        Creator.publish();
                        continue;
                    });
            }
            commit();
            each([Creator, Player], () => {
                interact.seeEnd();
            });

            exit();
        }
    );