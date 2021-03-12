'reach 0.1';

const CommonInterface = {
    seeEnd: Fun([], Null)
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
                getMove: Fun([], UInt),
                seeMove: Fun([UInt], Null),
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
                        (_ => price),
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