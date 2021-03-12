'reach 0.1';

const CommonInterface = {
    seeEnd: Fun([], Null)
};

const cf = (a, i) => a[i] != 0 ? 1 : 0;

const getNonZero = (a) => {
    return cf(a, 0) + cf(a, 1) + cf(a, 2) + cf(a, 3) + cf(a, 4) +
        cf(a, 5) + cf(a, 6) + cf(a, 7) + cf(a, 8) + cf(a, 9);
}

const foldingPrice = (cnt, price) => {
    return cnt * (cnt + 1) * price;
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
                        assume(Array.length(msg) == 10);
                        const when = msg != [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        return { msg, when };
                    }),
                        (move => foldingPrice(getNonZero(move), price)),
                        (move) => {
                            Player.only(() =>
                                interact.seeMove(move));
                            transfer(foldingPrice(getNonZero(move), price)).to(Creator);
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