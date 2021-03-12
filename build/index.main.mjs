// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Creator(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc4 = stdlib.T_Data({
    Creator: ctc2,
    Player: ctc3
     });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0]);
  
  
  const v1 = await ctc.creationTime();
  const v0 = stdlib.protect(ctc0, interact.price, null);
  const txn1 = await (ctc.sendrecv('Creator', 1, 1, stdlib.checkedBigNumberify('./index.rsh:38:21:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v1, v0], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:38:21:dot', stdlib.UInt_max, 0), v1]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:38:21:dot', stdlib.UInt_max, 0)]);
    const [v5] = txn1.data;
    const v6 = txn1.value;
    const v10 = txn1.time;
    const v4 = txn1.from;
    
    const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v7, {
      at: './index.rsh:38:21:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Creator'
       });
    stdlib.assert(true, {
      at: './index.rsh:38:21:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
       });
    const v11 = true;
    const v470 = v10;
    
    if ((() => {
      
      return v11; })()) {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v470]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11]);
      sim_r.isHalt = false;
       }
    else {
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.isHalt = true;
       }
    return sim_r;
     })));
  const [v5] = txn1.data;
  const v6 = txn1.value;
  const v10 = txn1.time;
  const v4 = txn1.from;
  const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v7, {
    at: './index.rsh:38:21:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Creator'
     });
  stdlib.assert(true, {
    at: './index.rsh:38:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
     });
  let v11 = true;
  let v470 = v10;
  
  while ((() => {
    
    return v11; })()) {
    const v41 = stdlib.protect(ctc1, await interact.shouldEnd(), {
      at: './index.rsh:47:60:application',
      fs: ['at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:46:40:function exp)', 'at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)'],
      msg: 'shouldEnd',
      who: 'Creator'
       });
    const v63 = ['Creator', null];
    const txn2 = await (ctc.sendrecv('Creator', 3, 1, stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc1, ctc0, ctc4], [v4, v5, v11, v470, v63], stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0), [ctc4], v41, false, stdlib.checkedBigNumberify('./index.rsh:66:30:decimal', stdlib.UInt_max, 1024), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v470]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11]);
      const [v190] = txn2.data;
      const v191 = txn2.value;
      const v319 = txn2.time;
      const v189 = txn2.from;
      
      let v192;
      switch (v190[0]) {
        case 'Creator': {
          
          v192 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v196 = v190[1];
          const v200 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v202 = stdlib.eq(v200, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v204 = v202 ? false : true;
          const v207 = v204 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v210 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v212 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v214 = v212 ? false : true;
          const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v219 = stdlib.add(v207, v217);
          const v221 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v223 = stdlib.eq(v221, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v225 = v223 ? false : true;
          const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v230 = stdlib.add(v219, v228);
          const v232 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v234 = stdlib.eq(v232, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v236 = v234 ? false : true;
          const v239 = v236 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v241 = stdlib.add(v230, v239);
          const v243 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v245 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v247 = v245 ? false : true;
          const v250 = v247 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v252 = stdlib.add(v241, v250);
          const v254 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v256 = stdlib.eq(v254, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v258 = v256 ? false : true;
          const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v263 = stdlib.add(v252, v261);
          const v265 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v267 = stdlib.eq(v265, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v269 = v267 ? false : true;
          const v272 = v269 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v274 = stdlib.add(v263, v272);
          const v276 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v278 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v280 = v278 ? false : true;
          const v283 = v280 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v285 = stdlib.add(v274, v283);
          const v287 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v289 = stdlib.eq(v287, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v291 = v289 ? false : true;
          const v294 = v291 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v296 = stdlib.add(v285, v294);
          const v298 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v300 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v302 = v300 ? false : true;
          const v305 = v302 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v307 = stdlib.add(v296, v305);
          const v310 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v311 = stdlib.mul(v307, v310);
          const v312 = stdlib.mul(v311, v5);
          v192 = v312;
          
          break;
           }
         }
      const v316 = stdlib.eq(v191, v192);
      stdlib.assert(v316, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      stdlib.assert(true, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      let v320;
      switch (v190[0]) {
        case 'Creator': {
          
          const v322 = stdlib.eq(v189, v4);
          v320 = v322;
          
          break;
           }
        case 'Player': {
          const v325 = v190[1];
          v320 = true;
          
          break;
           }
         }
      stdlib.assert(v320, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Creator'
         });
      switch (v190[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv470 = v319;
          
          (() => {
            const v11 = cv11;
            const v470 = cv470;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v470]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
        case 'Player': {
          const v330 = v190[1];
          const v337 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v339 = stdlib.eq(v337, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v341 = v339 ? false : true;
          const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v347 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v349 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v351 = v349 ? false : true;
          const v354 = v351 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v356 = stdlib.add(v344, v354);
          const v358 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v360 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v362 = v360 ? false : true;
          const v365 = v362 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v367 = stdlib.add(v356, v365);
          const v369 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v373 = v371 ? false : true;
          const v376 = v373 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v378 = stdlib.add(v367, v376);
          const v380 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v382 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v384 = v382 ? false : true;
          const v387 = v384 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v389 = stdlib.add(v378, v387);
          const v391 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v393 = stdlib.eq(v391, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v395 = v393 ? false : true;
          const v398 = v395 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v400 = stdlib.add(v389, v398);
          const v402 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v404 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v406 = v404 ? false : true;
          const v409 = v406 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v411 = stdlib.add(v400, v409);
          const v413 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v415 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v417 = v415 ? false : true;
          const v420 = v417 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v422 = stdlib.add(v411, v420);
          const v424 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v426 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v428 = v426 ? false : true;
          const v431 = v428 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v433 = stdlib.add(v422, v431);
          const v435 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v437 = stdlib.eq(v435, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v439 = v437 ? false : true;
          const v442 = v439 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v444 = stdlib.add(v433, v442);
          const v447 = stdlib.add(v444, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v448 = stdlib.mul(v444, v447);
          const v449 = stdlib.mul(v448, v5);
          sim_r.txns.push({
            amt: v449,
            to: v4
             });
          const cv11 = v11;
          const cv470 = v319;
          
          (() => {
            const v11 = cv11;
            const v470 = cv470;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v470]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
         }
      return sim_r;
       })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv('Creator', 4, 0, stdlib.checkedBigNumberify('./index.rsh:67:33:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc1, ctc0], [v4, v5, v11, v470], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:33:dot', stdlib.UInt_max, 2), v4, v5, v11, v470]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:67:33:dot', stdlib.UInt_max, 2), v4, v5, v11]);
        const [] = txn3.data;
        const v456 = txn3.value;
        const v461 = txn3.time;
        const v455 = txn3.from;
        
        const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v457, {
          at: './index.rsh:67:33:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Creator'
           });
        const v458 = stdlib.addressEq(v4, v455);
        stdlib.assert(v458, {
          at: './index.rsh:67:33:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
           });
        const cv11 = v11;
        const cv470 = v461;
        
        (() => {
          const v11 = cv11;
          const v470 = cv470;
          
          if ((() => {
            
            return v11; })()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v470]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11]);
            sim_r.isHalt = false;
             }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.isHalt = true;
             } })();
        return sim_r;
         })));
      const [] = txn3.data;
      const v456 = txn3.value;
      const v461 = txn3.time;
      const v455 = txn3.from;
      const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v457, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      const v458 = stdlib.addressEq(v4, v455);
      stdlib.assert(v458, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      const cv11 = v11;
      const cv470 = v461;
      
      v11 = cv11;
      v470 = cv470;
      
      continue;
       }
    else {
      const [v190] = txn2.data;
      const v191 = txn2.value;
      const v319 = txn2.time;
      const v189 = txn2.from;
      let v192;
      switch (v190[0]) {
        case 'Creator': {
          
          v192 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v196 = v190[1];
          const v200 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v202 = stdlib.eq(v200, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v204 = v202 ? false : true;
          const v207 = v204 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v210 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v212 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v214 = v212 ? false : true;
          const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v219 = stdlib.add(v207, v217);
          const v221 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v223 = stdlib.eq(v221, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v225 = v223 ? false : true;
          const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v230 = stdlib.add(v219, v228);
          const v232 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v234 = stdlib.eq(v232, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v236 = v234 ? false : true;
          const v239 = v236 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v241 = stdlib.add(v230, v239);
          const v243 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v245 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v247 = v245 ? false : true;
          const v250 = v247 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v252 = stdlib.add(v241, v250);
          const v254 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v256 = stdlib.eq(v254, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v258 = v256 ? false : true;
          const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v263 = stdlib.add(v252, v261);
          const v265 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v267 = stdlib.eq(v265, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v269 = v267 ? false : true;
          const v272 = v269 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v274 = stdlib.add(v263, v272);
          const v276 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v278 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v280 = v278 ? false : true;
          const v283 = v280 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v285 = stdlib.add(v274, v283);
          const v287 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v289 = stdlib.eq(v287, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v291 = v289 ? false : true;
          const v294 = v291 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v296 = stdlib.add(v285, v294);
          const v298 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v300 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v302 = v300 ? false : true;
          const v305 = v302 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v307 = stdlib.add(v296, v305);
          const v310 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v311 = stdlib.mul(v307, v310);
          const v312 = stdlib.mul(v311, v5);
          v192 = v312;
          
          break;
           }
         }
      const v316 = stdlib.eq(v191, v192);
      stdlib.assert(v316, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      stdlib.assert(true, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      let v320;
      switch (v190[0]) {
        case 'Creator': {
          
          const v322 = stdlib.eq(v189, v4);
          v320 = v322;
          
          break;
           }
        case 'Player': {
          const v325 = v190[1];
          v320 = true;
          
          break;
           }
         }
      stdlib.assert(v320, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Creator'
         });
      switch (v190[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv470 = v319;
          
          v11 = cv11;
          v470 = cv470;
          
          continue;
          break;
           }
        case 'Player': {
          const v330 = v190[1];
          const v337 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v339 = stdlib.eq(v337, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v341 = v339 ? false : true;
          const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v347 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v349 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v351 = v349 ? false : true;
          const v354 = v351 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v356 = stdlib.add(v344, v354);
          const v358 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v360 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v362 = v360 ? false : true;
          const v365 = v362 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v367 = stdlib.add(v356, v365);
          const v369 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v373 = v371 ? false : true;
          const v376 = v373 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v378 = stdlib.add(v367, v376);
          const v380 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v382 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v384 = v382 ? false : true;
          const v387 = v384 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v389 = stdlib.add(v378, v387);
          const v391 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v393 = stdlib.eq(v391, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v395 = v393 ? false : true;
          const v398 = v395 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v400 = stdlib.add(v389, v398);
          const v402 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v404 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v406 = v404 ? false : true;
          const v409 = v406 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v411 = stdlib.add(v400, v409);
          const v413 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v415 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v417 = v415 ? false : true;
          const v420 = v417 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v422 = stdlib.add(v411, v420);
          const v424 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v426 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v428 = v426 ? false : true;
          const v431 = v428 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v433 = stdlib.add(v422, v431);
          const v435 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v437 = stdlib.eq(v435, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v439 = v437 ? false : true;
          const v442 = v439 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v444 = stdlib.add(v433, v442);
          const v447 = stdlib.add(v444, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v448 = stdlib.mul(v444, v447);
          const v449 = stdlib.mul(v448, v5);
          ;
          const cv11 = v11;
          const cv470 = v319;
          
          v11 = cv11;
          v470 = cv470;
          
          continue;
          break;
           }
         } }
     }
  stdlib.protect(ctc2, await interact.seeEnd(), {
    at: './index.rsh:73:32:application',
    fs: ['at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:40:function exp)'],
    msg: 'seeEnd',
    who: 'Creator'
     });
  return;
  
   }
export async function Player(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    Creator: ctc2,
    Player: ctc1
     });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc5, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc5]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v1 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Player', 1, 1, [ctc0], false, false));
  const [v5] = txn1.data;
  const v6 = txn1.value;
  const v10 = txn1.time;
  const v4 = txn1.from;
  const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v7, {
    at: './index.rsh:38:21:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Player'
     });
  stdlib.assert(true, {
    at: './index.rsh:38:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
     });
  let v11 = true;
  let v470 = v10;
  
  while ((() => {
    
    return v11; })()) {
    const v47 = stdlib.protect(ctc1, await interact.getMove(), {
      at: './index.rsh:54:64:application',
      fs: ['at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:53:39:function exp)', 'at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)'],
      msg: 'getMove',
      who: 'Player'
       });
    const v54 = v47.reduce((v49, v50) => {
      const v52 = stdlib.add(v49, stdlib.checkedBigNumberify('reach standard library:190:40:decimal', stdlib.UInt_max, 1));
      
      return v52; }, stdlib.checkedBigNumberify('reach standard library:190:19:decimal', stdlib.UInt_max, 0))
    const v56 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:55:53:decimal', stdlib.UInt_max, 10));
    stdlib.assert(v56, {
      at: './index.rsh:55:31:application',
      fs: ['at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:53:39:function exp)', 'at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)'],
      msg: null,
      who: 'Player'
       });
    const v68 = ['Player', v47];
    const v73 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
    const v75 = stdlib.eq(v73, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v77 = v75 ? false : true;
    const v80 = v77 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v83 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
    const v85 = stdlib.eq(v83, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v87 = v85 ? false : true;
    const v90 = v87 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v92 = stdlib.add(v80, v90);
    const v94 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
    const v96 = stdlib.eq(v94, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v98 = v96 ? false : true;
    const v101 = v98 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v103 = stdlib.add(v92, v101);
    const v105 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
    const v107 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v109 = v107 ? false : true;
    const v112 = v109 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v114 = stdlib.add(v103, v112);
    const v116 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
    const v118 = stdlib.eq(v116, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v120 = v118 ? false : true;
    const v123 = v120 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v125 = stdlib.add(v114, v123);
    const v127 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
    const v129 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v131 = v129 ? false : true;
    const v134 = v131 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v136 = stdlib.add(v125, v134);
    const v138 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
    const v140 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v142 = v140 ? false : true;
    const v145 = v142 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v147 = stdlib.add(v136, v145);
    const v149 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
    const v151 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v153 = v151 ? false : true;
    const v156 = v153 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v158 = stdlib.add(v147, v156);
    const v160 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
    const v162 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v164 = v162 ? false : true;
    const v167 = v164 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v169 = stdlib.add(v158, v167);
    const v171 = v47[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
    const v173 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
    const v175 = v173 ? false : true;
    const v178 = v175 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
    const v180 = stdlib.add(v169, v178);
    const v183 = stdlib.add(v180, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
    const v184 = stdlib.mul(v180, v183);
    const v185 = stdlib.mul(v184, v5);
    const txn2 = await (ctc.sendrecv('Player', 3, 1, stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc5, ctc0, ctc3], [v4, v5, v11, v470, v68], v185, [ctc3], true, false, stdlib.checkedBigNumberify('./index.rsh:66:30:decimal', stdlib.UInt_max, 1024), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v470]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11]);
      const [v190] = txn2.data;
      const v191 = txn2.value;
      const v319 = txn2.time;
      const v189 = txn2.from;
      
      let v192;
      switch (v190[0]) {
        case 'Creator': {
          
          v192 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v196 = v190[1];
          const v200 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v202 = stdlib.eq(v200, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v204 = v202 ? false : true;
          const v207 = v204 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v210 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v212 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v214 = v212 ? false : true;
          const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v219 = stdlib.add(v207, v217);
          const v221 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v223 = stdlib.eq(v221, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v225 = v223 ? false : true;
          const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v230 = stdlib.add(v219, v228);
          const v232 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v234 = stdlib.eq(v232, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v236 = v234 ? false : true;
          const v239 = v236 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v241 = stdlib.add(v230, v239);
          const v243 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v245 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v247 = v245 ? false : true;
          const v250 = v247 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v252 = stdlib.add(v241, v250);
          const v254 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v256 = stdlib.eq(v254, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v258 = v256 ? false : true;
          const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v263 = stdlib.add(v252, v261);
          const v265 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v267 = stdlib.eq(v265, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v269 = v267 ? false : true;
          const v272 = v269 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v274 = stdlib.add(v263, v272);
          const v276 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v278 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v280 = v278 ? false : true;
          const v283 = v280 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v285 = stdlib.add(v274, v283);
          const v287 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v289 = stdlib.eq(v287, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v291 = v289 ? false : true;
          const v294 = v291 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v296 = stdlib.add(v285, v294);
          const v298 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v300 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v302 = v300 ? false : true;
          const v305 = v302 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v307 = stdlib.add(v296, v305);
          const v310 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v311 = stdlib.mul(v307, v310);
          const v312 = stdlib.mul(v311, v5);
          v192 = v312;
          
          break;
           }
         }
      const v316 = stdlib.eq(v191, v192);
      stdlib.assert(v316, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      let v320;
      switch (v190[0]) {
        case 'Creator': {
          
          const v322 = stdlib.eq(v189, v4);
          v320 = v322;
          
          break;
           }
        case 'Player': {
          const v325 = v190[1];
          v320 = true;
          
          break;
           }
         }
      stdlib.assert(v320, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Player'
         });
      switch (v190[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv470 = v319;
          
          (() => {
            const v11 = cv11;
            const v470 = cv470;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v470]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
        case 'Player': {
          const v330 = v190[1];
          const v337 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v339 = stdlib.eq(v337, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v341 = v339 ? false : true;
          const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v347 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v349 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v351 = v349 ? false : true;
          const v354 = v351 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v356 = stdlib.add(v344, v354);
          const v358 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v360 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v362 = v360 ? false : true;
          const v365 = v362 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v367 = stdlib.add(v356, v365);
          const v369 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v373 = v371 ? false : true;
          const v376 = v373 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v378 = stdlib.add(v367, v376);
          const v380 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v382 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v384 = v382 ? false : true;
          const v387 = v384 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v389 = stdlib.add(v378, v387);
          const v391 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v393 = stdlib.eq(v391, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v395 = v393 ? false : true;
          const v398 = v395 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v400 = stdlib.add(v389, v398);
          const v402 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v404 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v406 = v404 ? false : true;
          const v409 = v406 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v411 = stdlib.add(v400, v409);
          const v413 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v415 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v417 = v415 ? false : true;
          const v420 = v417 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v422 = stdlib.add(v411, v420);
          const v424 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v426 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v428 = v426 ? false : true;
          const v431 = v428 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v433 = stdlib.add(v422, v431);
          const v435 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v437 = stdlib.eq(v435, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v439 = v437 ? false : true;
          const v442 = v439 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v444 = stdlib.add(v433, v442);
          const v447 = stdlib.add(v444, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v448 = stdlib.mul(v444, v447);
          const v449 = stdlib.mul(v448, v5);
          sim_r.txns.push({
            amt: v449,
            to: v4
             });
          const cv11 = v11;
          const cv470 = v319;
          
          (() => {
            const v11 = cv11;
            const v470 = cv470;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v470]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
         }
      return sim_r;
       })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv('Player', 4, 0, [], false, false));
      const [] = txn3.data;
      const v456 = txn3.value;
      const v461 = txn3.time;
      const v455 = txn3.from;
      const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v457, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      const v458 = stdlib.addressEq(v4, v455);
      stdlib.assert(v458, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const cv11 = v11;
      const cv470 = v461;
      
      v11 = cv11;
      v470 = cv470;
      
      continue;
       }
    else {
      const [v190] = txn2.data;
      const v191 = txn2.value;
      const v319 = txn2.time;
      const v189 = txn2.from;
      let v192;
      switch (v190[0]) {
        case 'Creator': {
          
          v192 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v196 = v190[1];
          const v200 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v202 = stdlib.eq(v200, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v204 = v202 ? false : true;
          const v207 = v204 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v210 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v212 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v214 = v212 ? false : true;
          const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v219 = stdlib.add(v207, v217);
          const v221 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v223 = stdlib.eq(v221, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v225 = v223 ? false : true;
          const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v230 = stdlib.add(v219, v228);
          const v232 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v234 = stdlib.eq(v232, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v236 = v234 ? false : true;
          const v239 = v236 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v241 = stdlib.add(v230, v239);
          const v243 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v245 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v247 = v245 ? false : true;
          const v250 = v247 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v252 = stdlib.add(v241, v250);
          const v254 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v256 = stdlib.eq(v254, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v258 = v256 ? false : true;
          const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v263 = stdlib.add(v252, v261);
          const v265 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v267 = stdlib.eq(v265, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v269 = v267 ? false : true;
          const v272 = v269 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v274 = stdlib.add(v263, v272);
          const v276 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v278 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v280 = v278 ? false : true;
          const v283 = v280 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v285 = stdlib.add(v274, v283);
          const v287 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v289 = stdlib.eq(v287, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v291 = v289 ? false : true;
          const v294 = v291 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v296 = stdlib.add(v285, v294);
          const v298 = v196[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v300 = stdlib.eq(v298, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v302 = v300 ? false : true;
          const v305 = v302 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v307 = stdlib.add(v296, v305);
          const v310 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v311 = stdlib.mul(v307, v310);
          const v312 = stdlib.mul(v311, v5);
          v192 = v312;
          
          break;
           }
         }
      const v316 = stdlib.eq(v191, v192);
      stdlib.assert(v316, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:45:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      let v320;
      switch (v190[0]) {
        case 'Creator': {
          
          const v322 = stdlib.eq(v189, v4);
          v320 = v322;
          
          break;
           }
        case 'Player': {
          const v325 = v190[1];
          v320 = true;
          
          break;
           }
         }
      stdlib.assert(v320, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Player'
         });
      switch (v190[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv470 = v319;
          
          v11 = cv11;
          v470 = cv470;
          
          continue;
          break;
           }
        case 'Player': {
          const v330 = v190[1];
          stdlib.protect(ctc2, await interact.seeMove(v330), {
            at: './index.rsh:62:49:application',
            fs: ['at ./index.rsh:61:40:application call to [unknown function] (defined at: ./index.rsh:61:44:function exp)'],
            msg: 'seeMove',
            who: 'Player'
             });
          
          const v337 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v339 = stdlib.eq(v337, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v341 = v339 ? false : true;
          const v344 = v341 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v347 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v349 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v351 = v349 ? false : true;
          const v354 = v351 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v356 = stdlib.add(v344, v354);
          const v358 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v360 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v362 = v360 ? false : true;
          const v365 = v362 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v367 = stdlib.add(v356, v365);
          const v369 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v371 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v373 = v371 ? false : true;
          const v376 = v373 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v378 = stdlib.add(v367, v376);
          const v380 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v382 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v384 = v382 ? false : true;
          const v387 = v384 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v389 = stdlib.add(v378, v387);
          const v391 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v393 = stdlib.eq(v391, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v395 = v393 ? false : true;
          const v398 = v395 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v400 = stdlib.add(v389, v398);
          const v402 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v404 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v406 = v404 ? false : true;
          const v409 = v406 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v411 = stdlib.add(v400, v409);
          const v413 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v415 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v417 = v415 ? false : true;
          const v420 = v417 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v422 = stdlib.add(v411, v420);
          const v424 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v426 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v428 = v426 ? false : true;
          const v431 = v428 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v433 = stdlib.add(v422, v431);
          const v435 = v330[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v437 = stdlib.eq(v435, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v439 = v437 ? false : true;
          const v442 = v439 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v444 = stdlib.add(v433, v442);
          const v447 = stdlib.add(v444, stdlib.checkedBigNumberify('./index.rsh:15:25:decimal', stdlib.UInt_max, 1));
          const v448 = stdlib.mul(v444, v447);
          const v449 = stdlib.mul(v448, v5);
          ;
          const cv11 = v11;
          const cv470 = v319;
          
          v11 = cv11;
          v470 = cv470;
          
          continue;
          
          break;
           }
         } }
     }
  stdlib.protect(ctc2, await interact.seeEnd(), {
    at: './index.rsh:73:32:application',
    fs: ['at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:40:function exp)'],
    msg: 'seeEnd',
    who: 'Player'
     });
  return;
  
   }

const _ALGO = {
  appApproval: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 5
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 2
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 2
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn CloseRemainderTo
global ZeroAddress
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 0, 203, 122],
  steps: [null, `#pragma version 2
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:38:21:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:38:21:dot"
// "[]"
int 1
assert
// compute state in HM_Set 2
int 2
itob
gtxn 3 Sender
concat
gtxna 0 ApplicationArgs 5
concat
int 1
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, `#pragma version 2
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
gtxna 0 ApplicationArgs 8
byteget 0
int 0
==
bz l1
int 0
store 253
l1:
gtxna 0 ApplicationArgs 8
byteget 0
int 1
==
bz l2
gtxna 0 ApplicationArgs 8
substring 1 81
dup
store 252
substring 0 8
btoi
int 0
==
!
int 1
int 0
ite
load 252
substring 8 16
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 16 24
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 24 32
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 32 40
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 40 48
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 48 56
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 56 64
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 64 72
btoi
int 0
==
!
int 1
int 0
ite
+
load 252
substring 72 80
btoi
int 0
==
!
int 1
int 0
ite
+
dup
dup
store 251
int 1
+
*
gtxna 0 ApplicationArgs 6
btoi
*
store 253
l2:
l0:
// Just "pay amount correct"
// "./index.rsh:45:21:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
load 253
==
assert
// Just "sender correct"
// "./index.rsh:45:21:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 8
byteget 0
int 0
==
bz l4
gtxn 3 Sender
gtxna 0 ApplicationArgs 5
==
store 252
l4:
gtxna 0 ApplicationArgs 8
byteget 0
int 1
==
bz l5
gtxna 0 ApplicationArgs 8
substring 1 81
store 251
int 1
store 252
l5:
l3:
// Nothing
// "./index.rsh:45:21:application"
// "[]"
load 252
assert
gtxna 0 ApplicationArgs 8
byteget 0
int 0
==
bz l7
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l7:
gtxna 0 ApplicationArgs 8
byteget 0
int 1
==
bz l8
gtxna 0 ApplicationArgs 8
substring 1 81
dup
store 251
substring 0 8
btoi
int 0
==
!
int 1
int 0
ite
load 251
substring 8 16
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 16 24
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 24 32
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 32 40
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 40 48
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 48 56
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 56 64
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 64 72
btoi
int 0
==
!
int 1
int 0
ite
+
load 251
substring 72 80
btoi
int 0
==
!
int 1
int 0
ite
+
store 250
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 250
load 250
int 1
+
*
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 7
btoi
bz l9
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l9:
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l8:
l6:
done:
int 1
return
`, `#pragma version 2
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:67:33:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:67:33:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 7
btoi
bz l0
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v4",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v11",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum ReachContract._enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Creator",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256[10]",
                    "name": "_Player",
                    "type": "uint256[10]"
                  }
                ],
                "internalType": "struct ReachContract.T8",
                "name": "v190",
                "type": "tuple"
              }
            ],
            "internalType": "struct ReachContract.T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v4",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v11",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v4",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v11",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum ReachContract._enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Creator",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256[10]",
                    "name": "_Player",
                    "type": "uint256[10]"
                  }
                ],
                "internalType": "struct ReachContract.T8",
                "name": "v190",
                "type": "tuple"
              }
            ],
            "internalType": "struct ReachContract.T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v4",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v5",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v11",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct ReachContract.T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b610e18806100ab6000396000f3fe6080604052600436106100345760003560e01c80639532ef0114610039578063a9dfc4561461004e578063f01a326c14610061575b600080fd5b61004c610047366004610c42565b610074565b005b61004c61005c366004610c19565b610127565b61004c61006f366004610c31565b61090f565b604051610088906000908390602001610d34565b6040516020818303038152906040528051906020012060001c600054146100ae57600080fd5b34156100b957600080fd5b7ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166816040516100e89190610d1d565b60405180910390a16100f8610aac565b8051339052805160208084013591810191909152808201805160019052514391015261012381610a29565b5050565b60405161013b906002908390602001610d43565b6040516020818303038152906040528051906020012060001c6000541461016157600080fd5b610169610ad1565b6101796104006060840135610d95565b431061018457600080fd5b600061019660a0840160808501610bff565b60018111156101b557634e487b7160e01b600052602160045260246000fd5b14156101c4576000815261042f565b60016101d660a0840160808501610bff565b60018111156101f557634e487b7160e01b600052602160045260246000fd5b141561042f57604080516101408181019092529060c0840190600a90839083908082843760009201919091525050506020820181905261012001511561023c57600161023f565b60005b61024a57600061024d565b60015b6020820151610100015115610263576001610266565b60005b610271576000610274565b60015b602083015160e001511561028957600161028c565b60005b61029757600061029a565b60015b602084015160c00151156102af5760016102b2565b60005b6102bd5760006102c0565b60015b602085015160a00151156102d55760016102d8565b60005b6102e35760006102e6565b60015b602086015160800151156102fb5760016102fe565b60005b61030957600061030c565b60015b60208701516060015115610321576001610324565b60005b61032f576000610332565b60015b6020880151604001511561034757600161034a565b60005b610355576000610358565b60015b60208981015101511561036c57600161036f565b60005b61037a57600061037d565b60015b60208a0151511561038f576001610392565b60005b61039d5760006103a0565b60015b6103aa9190610d95565b6103b49190610d95565b6103be9190610d95565b6103c89190610d95565b6103d29190610d95565b6103dc9190610d95565b6103e69190610d95565b6103f09190610d95565b6103fa9190610d95565b6040820181905260208301359061041390600190610d95565b82604001516104229190610dad565b61042c9190610dad565b81525b8051341461043c57600080fd5b600061044e60a0840160808501610bff565b600181111561046d57634e487b7160e01b600052602160045260246000fd5b1415610495576104806020830183610bc4565b6001600160a01b031633146060820152610502565b60016104a760a0840160808501610bff565b60018111156104c657634e487b7160e01b600052602160045260246000fd5b141561050257604080516101408181019092529060c0840190600a90839083908082843760009201919091525050506080820152600160608201525b806060015161051057600080fd5b600061052260a0840160808501610bff565b600181111561054157634e487b7160e01b600052602160045260246000fd5b14156105ce577f2458bbd82562e0fce1e01f61c6b190fb0ab28bf2d071d17e6eebc6deb88a8c3d826040516105769190610c8f565b60405180910390a1610586610aac565b6105936020840184610bc4565b81516001600160a01b03909116905280516020808501359181019190915280820180516000905251439101526105c881610a29565b50610123565b60016105e060a0840160808501610bff565b60018111156105ff57634e487b7160e01b600052602160045260246000fd5b141561012357604080516101408181019092529060c0840190600a908390839080828437600092019190915250505060a08201819052610120015115610646576001610649565b60005b610654576000610657565b60015b60a082015161010001511561066d576001610670565b60005b61067b57600061067e565b60015b60a083015160e0015115610693576001610696565b60005b6106a15760006106a4565b60015b60a084015160c00151156106b95760016106bc565b60005b6106c75760006106ca565b60015b60a0858101510151156106de5760016106e1565b60005b6106ec5760006106ef565b60015b60a08601516080015115610704576001610707565b60005b610712576000610715565b60015b60a0870151606001511561072a57600161072d565b60005b61073857600061073b565b60015b60a08801516040015115610750576001610753565b60005b61075e576000610761565b60015b60a08901516020015115610776576001610779565b60005b610784576000610787565b60015b60a08a0151511561079957600161079c565b60005b6107a75760006107aa565b60015b6107b49190610d95565b6107be9190610d95565b6107c89190610d95565b6107d29190610d95565b6107dc9190610d95565b6107e69190610d95565b6107f09190610d95565b6107fa9190610d95565b6108049190610d95565b60c08201526108166020830183610bc4565b6001600160a01b03166108fc836000016020013560018460c0015161083b9190610d95565b8460c0015161084a9190610dad565b6108549190610dad565b6040518115909202916000818181858888f1935050505015801561087c573d6000803e3d6000fd5b507f2458bbd82562e0fce1e01f61c6b190fb0ab28bf2d071d17e6eebc6deb88a8c3d826040516108ac9190610c8f565b60405180910390a16108bc610aac565b6108c96020840184610bc4565b81516001600160a01b03909116905280516020808501359101526108f36060840160408501610be5565b602080830180519215159092529051439101526105c881610a29565b604051610923906002908390602001610d43565b6040516020818303038152906040528051906020012060001c6000541461094957600080fd5b6109596104006060830135610d95565b4310158015610966575060015b61096f57600080fd5b341561097a57600080fd5b336109886020830183610bc4565b6001600160a01b03161461099b57600080fd5b7f056f3bdc744f406723f7387e7270a1b63bd96859b93e78ad3d5472905e654988816040516109ca9190610cf6565b60405180910390a16109da610aac565b6109e76020830183610bc4565b81516001600160a01b0390911690528051602080840135910152610a116060830160408401610be5565b60208083018051921515909252905143910152610123815b60208101515115610aa257610a3c610b20565b8151516001600160a01b0316815281516020908101518183015280830180515115156040808501919091529051820151606084015251610a8191600291849101610d57565b60408051601f19818403018152919052805160209091012060005550610aa9565b6000805533ff5b50565b6040518060400160405280610abf610b53565b8152602001610acc610b53565b905290565b6040518060e0016040528060008152602001610aeb610b6a565b81526000602082018190526040820152606001610b06610b6a565b8152602001610b13610b6a565b8152602001600081525090565b604051806080016040528060006001600160a01b0316815260200160008152602001600015158152602001600081525090565b604080518082019091526000808252602082015290565b604051806101400160405280600a906020820280368337509192915050565b80356001600160a01b0381168114610ba057600080fd5b919050565b80358015158114610ba057600080fd5b803560028110610ba057600080fd5b600060208284031215610bd5578081fd5b610bde82610b89565b9392505050565b600060208284031215610bf6578081fd5b610bde82610ba5565b600060208284031215610c10578081fd5b610bde82610bb5565b60006102008284031215610c2b578081fd5b50919050565b600060a08284031215610c2b578081fd5b600060408284031215610c2b578081fd5b6001600160a01b03610c6482610b89565b16825260208101356020830152610c7d60408201610ba5565b15156040830152606090810135910152565b6102008101610c9e8284610c53565b610caa60808401610bb5565b60028110610cc857634e487b7160e01b600052602160045260246000fd5b6080830152610cd960a08401610ba5565b151560a083015261014060c0840160c08401376000815292915050565b60a08101610d048284610c53565b610d1060808401610ba5565b1515608083015292915050565b813581526020918201359181019190915260400190565b91825235602082015260400190565b82815260a08101610bde6020830184610c53565b91825280516001600160a01b031660208084019190915281015160408084019190915281015115156060808401919091520151608082015260a00190565b60008219821115610da857610da8610dcc565b500190565b6000816000190483118215151615610dc757610dc7610dcc565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220bb4c17c1e075b2f1e162872b281ba73293465e47cb5f5a13082daf0b02d610dc64736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

