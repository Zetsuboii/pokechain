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
    const v473 = v10;
    
    if ((() => {
      
      return v11; })()) {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v473]);
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
  let v473 = v10;
  
  while ((() => {
    
    return v11; })()) {
    const v41 = stdlib.protect(ctc1, await interact.shouldEnd(), {
      at: './index.rsh:47:60:application',
      fs: ['at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:46:40:function exp)', 'at ./index.rsh:45:21:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)'],
      msg: 'shouldEnd',
      who: 'Creator'
       });
    const v63 = ['Creator', null];
    const txn2 = await (ctc.sendrecv('Creator', 3, 1, stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc1, ctc0, ctc4], [v4, v5, v11, v473, v63], stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0), [ctc4], v41, false, stdlib.checkedBigNumberify('./index.rsh:66:30:decimal', stdlib.UInt_max, 1024), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v473]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11]);
      const [v191] = txn2.data;
      const v192 = txn2.value;
      const v321 = txn2.time;
      const v190 = txn2.from;
      
      let v193;
      switch (v191[0]) {
        case 'Creator': {
          
          v193 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v197 = v191[1];
          const v201 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v203 = stdlib.eq(v201, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v205 = v203 ? false : true;
          const v208 = v205 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v211 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v213 = stdlib.eq(v211, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v215 = v213 ? false : true;
          const v218 = v215 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v220 = stdlib.add(v208, v218);
          const v222 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v224 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v226 = v224 ? false : true;
          const v229 = v226 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v231 = stdlib.add(v220, v229);
          const v233 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v235 = stdlib.eq(v233, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v237 = v235 ? false : true;
          const v240 = v237 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v242 = stdlib.add(v231, v240);
          const v244 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v246 = stdlib.eq(v244, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v248 = v246 ? false : true;
          const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v253 = stdlib.add(v242, v251);
          const v255 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v259 = v257 ? false : true;
          const v262 = v259 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v264 = stdlib.add(v253, v262);
          const v266 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v268 = stdlib.eq(v266, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v270 = v268 ? false : true;
          const v273 = v270 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v275 = stdlib.add(v264, v273);
          const v277 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v279 = stdlib.eq(v277, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v281 = v279 ? false : true;
          const v284 = v281 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v286 = stdlib.add(v275, v284);
          const v288 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v290 = stdlib.eq(v288, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v292 = v290 ? false : true;
          const v295 = v292 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v297 = stdlib.add(v286, v295);
          const v299 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v301 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v303 = v301 ? false : true;
          const v306 = v303 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v308 = stdlib.add(v297, v306);
          const v311 = stdlib.add(v308, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v312 = stdlib.mul(v308, v311);
          const v313 = stdlib.mul(v312, v5);
          const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          v193 = v314;
          
          break;
           }
         }
      const v318 = stdlib.eq(v192, v193);
      stdlib.assert(v318, {
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
      let v322;
      switch (v191[0]) {
        case 'Creator': {
          
          const v324 = stdlib.eq(v190, v4);
          v322 = v324;
          
          break;
           }
        case 'Player': {
          const v327 = v191[1];
          v322 = true;
          
          break;
           }
         }
      stdlib.assert(v322, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Creator'
         });
      switch (v191[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv473 = v321;
          
          (() => {
            const v11 = cv11;
            const v473 = cv473;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v473]);
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
          const v332 = v191[1];
          const v339 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v341 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v343 = v341 ? false : true;
          const v346 = v343 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v349 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v353 = v351 ? false : true;
          const v356 = v353 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v358 = stdlib.add(v346, v356);
          const v360 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v362 = stdlib.eq(v360, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v364 = v362 ? false : true;
          const v367 = v364 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v369 = stdlib.add(v358, v367);
          const v371 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v373 = stdlib.eq(v371, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v375 = v373 ? false : true;
          const v378 = v375 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v380 = stdlib.add(v369, v378);
          const v382 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v384 = stdlib.eq(v382, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v386 = v384 ? false : true;
          const v389 = v386 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v391 = stdlib.add(v380, v389);
          const v393 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v395 = stdlib.eq(v393, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v397 = v395 ? false : true;
          const v400 = v397 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v402 = stdlib.add(v391, v400);
          const v404 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v406 = stdlib.eq(v404, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v408 = v406 ? false : true;
          const v411 = v408 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v413 = stdlib.add(v402, v411);
          const v415 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v417 = stdlib.eq(v415, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v419 = v417 ? false : true;
          const v422 = v419 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v424 = stdlib.add(v413, v422);
          const v426 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v428 = stdlib.eq(v426, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v430 = v428 ? false : true;
          const v433 = v430 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v435 = stdlib.add(v424, v433);
          const v437 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v439 = stdlib.eq(v437, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v441 = v439 ? false : true;
          const v444 = v441 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v446 = stdlib.add(v435, v444);
          const v449 = stdlib.add(v446, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v450 = stdlib.mul(v446, v449);
          const v451 = stdlib.mul(v450, v5);
          const v452 = stdlib.div(v451, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          sim_r.txns.push({
            amt: v452,
            to: v4
             });
          const cv11 = v11;
          const cv473 = v321;
          
          (() => {
            const v11 = cv11;
            const v473 = cv473;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v473]);
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
      const txn3 = await (ctc.sendrecv('Creator', 4, 0, stdlib.checkedBigNumberify('./index.rsh:67:33:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc1, ctc0], [v4, v5, v11, v473], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:67:33:dot', stdlib.UInt_max, 2), v4, v5, v11, v473]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:67:33:dot', stdlib.UInt_max, 2), v4, v5, v11]);
        const [] = txn3.data;
        const v459 = txn3.value;
        const v464 = txn3.time;
        const v458 = txn3.from;
        
        const v460 = stdlib.eq(v459, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v460, {
          at: './index.rsh:67:33:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Creator'
           });
        const v461 = stdlib.addressEq(v4, v458);
        stdlib.assert(v461, {
          at: './index.rsh:67:33:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
           });
        const cv11 = v11;
        const cv473 = v464;
        
        (() => {
          const v11 = cv11;
          const v473 = cv473;
          
          if ((() => {
            
            return v11; })()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v473]);
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
      const v459 = txn3.value;
      const v464 = txn3.time;
      const v458 = txn3.from;
      const v460 = stdlib.eq(v459, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v460, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      const v461 = stdlib.addressEq(v4, v458);
      stdlib.assert(v461, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      const cv11 = v11;
      const cv473 = v464;
      
      v11 = cv11;
      v473 = cv473;
      
      continue;
       }
    else {
      const [v191] = txn2.data;
      const v192 = txn2.value;
      const v321 = txn2.time;
      const v190 = txn2.from;
      let v193;
      switch (v191[0]) {
        case 'Creator': {
          
          v193 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v197 = v191[1];
          const v201 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v203 = stdlib.eq(v201, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v205 = v203 ? false : true;
          const v208 = v205 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v211 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v213 = stdlib.eq(v211, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v215 = v213 ? false : true;
          const v218 = v215 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v220 = stdlib.add(v208, v218);
          const v222 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v224 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v226 = v224 ? false : true;
          const v229 = v226 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v231 = stdlib.add(v220, v229);
          const v233 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v235 = stdlib.eq(v233, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v237 = v235 ? false : true;
          const v240 = v237 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v242 = stdlib.add(v231, v240);
          const v244 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v246 = stdlib.eq(v244, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v248 = v246 ? false : true;
          const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v253 = stdlib.add(v242, v251);
          const v255 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v259 = v257 ? false : true;
          const v262 = v259 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v264 = stdlib.add(v253, v262);
          const v266 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v268 = stdlib.eq(v266, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v270 = v268 ? false : true;
          const v273 = v270 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v275 = stdlib.add(v264, v273);
          const v277 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v279 = stdlib.eq(v277, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v281 = v279 ? false : true;
          const v284 = v281 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v286 = stdlib.add(v275, v284);
          const v288 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v290 = stdlib.eq(v288, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v292 = v290 ? false : true;
          const v295 = v292 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v297 = stdlib.add(v286, v295);
          const v299 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v301 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v303 = v301 ? false : true;
          const v306 = v303 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v308 = stdlib.add(v297, v306);
          const v311 = stdlib.add(v308, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v312 = stdlib.mul(v308, v311);
          const v313 = stdlib.mul(v312, v5);
          const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          v193 = v314;
          
          break;
           }
         }
      const v318 = stdlib.eq(v192, v193);
      stdlib.assert(v318, {
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
      let v322;
      switch (v191[0]) {
        case 'Creator': {
          
          const v324 = stdlib.eq(v190, v4);
          v322 = v324;
          
          break;
           }
        case 'Player': {
          const v327 = v191[1];
          v322 = true;
          
          break;
           }
         }
      stdlib.assert(v322, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Creator'
         });
      switch (v191[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv473 = v321;
          
          v11 = cv11;
          v473 = cv473;
          
          continue;
          break;
           }
        case 'Player': {
          const v332 = v191[1];
          const v339 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v341 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v343 = v341 ? false : true;
          const v346 = v343 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v349 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v353 = v351 ? false : true;
          const v356 = v353 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v358 = stdlib.add(v346, v356);
          const v360 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v362 = stdlib.eq(v360, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v364 = v362 ? false : true;
          const v367 = v364 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v369 = stdlib.add(v358, v367);
          const v371 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v373 = stdlib.eq(v371, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v375 = v373 ? false : true;
          const v378 = v375 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v380 = stdlib.add(v369, v378);
          const v382 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v384 = stdlib.eq(v382, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v386 = v384 ? false : true;
          const v389 = v386 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v391 = stdlib.add(v380, v389);
          const v393 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v395 = stdlib.eq(v393, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v397 = v395 ? false : true;
          const v400 = v397 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v402 = stdlib.add(v391, v400);
          const v404 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v406 = stdlib.eq(v404, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v408 = v406 ? false : true;
          const v411 = v408 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v413 = stdlib.add(v402, v411);
          const v415 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v417 = stdlib.eq(v415, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v419 = v417 ? false : true;
          const v422 = v419 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v424 = stdlib.add(v413, v422);
          const v426 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v428 = stdlib.eq(v426, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v430 = v428 ? false : true;
          const v433 = v430 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v435 = stdlib.add(v424, v433);
          const v437 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v439 = stdlib.eq(v437, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v441 = v439 ? false : true;
          const v444 = v441 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v446 = stdlib.add(v435, v444);
          const v449 = stdlib.add(v446, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v450 = stdlib.mul(v446, v449);
          const v451 = stdlib.mul(v450, v5);
          const v452 = stdlib.div(v451, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          ;
          const cv11 = v11;
          const cv473 = v321;
          
          v11 = cv11;
          v473 = cv473;
          
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
  let v473 = v10;
  
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
    const v183 = stdlib.add(v180, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
    const v184 = stdlib.mul(v180, v183);
    const v185 = stdlib.mul(v184, v5);
    const v186 = stdlib.div(v185, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
    const txn2 = await (ctc.sendrecv('Player', 3, 1, stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc5, ctc0, ctc3], [v4, v5, v11, v473, v68], v186, [ctc3], true, false, stdlib.checkedBigNumberify('./index.rsh:66:30:decimal', stdlib.UInt_max, 1024), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v473]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:21:dot', stdlib.UInt_max, 2), v4, v5, v11]);
      const [v191] = txn2.data;
      const v192 = txn2.value;
      const v321 = txn2.time;
      const v190 = txn2.from;
      
      let v193;
      switch (v191[0]) {
        case 'Creator': {
          
          v193 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v197 = v191[1];
          const v201 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v203 = stdlib.eq(v201, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v205 = v203 ? false : true;
          const v208 = v205 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v211 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v213 = stdlib.eq(v211, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v215 = v213 ? false : true;
          const v218 = v215 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v220 = stdlib.add(v208, v218);
          const v222 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v224 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v226 = v224 ? false : true;
          const v229 = v226 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v231 = stdlib.add(v220, v229);
          const v233 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v235 = stdlib.eq(v233, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v237 = v235 ? false : true;
          const v240 = v237 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v242 = stdlib.add(v231, v240);
          const v244 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v246 = stdlib.eq(v244, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v248 = v246 ? false : true;
          const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v253 = stdlib.add(v242, v251);
          const v255 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v259 = v257 ? false : true;
          const v262 = v259 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v264 = stdlib.add(v253, v262);
          const v266 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v268 = stdlib.eq(v266, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v270 = v268 ? false : true;
          const v273 = v270 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v275 = stdlib.add(v264, v273);
          const v277 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v279 = stdlib.eq(v277, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v281 = v279 ? false : true;
          const v284 = v281 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v286 = stdlib.add(v275, v284);
          const v288 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v290 = stdlib.eq(v288, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v292 = v290 ? false : true;
          const v295 = v292 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v297 = stdlib.add(v286, v295);
          const v299 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v301 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v303 = v301 ? false : true;
          const v306 = v303 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v308 = stdlib.add(v297, v306);
          const v311 = stdlib.add(v308, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v312 = stdlib.mul(v308, v311);
          const v313 = stdlib.mul(v312, v5);
          const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          v193 = v314;
          
          break;
           }
         }
      const v318 = stdlib.eq(v192, v193);
      stdlib.assert(v318, {
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
      let v322;
      switch (v191[0]) {
        case 'Creator': {
          
          const v324 = stdlib.eq(v190, v4);
          v322 = v324;
          
          break;
           }
        case 'Player': {
          const v327 = v191[1];
          v322 = true;
          
          break;
           }
         }
      stdlib.assert(v322, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Player'
         });
      switch (v191[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv473 = v321;
          
          (() => {
            const v11 = cv11;
            const v473 = cv473;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v473]);
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
          const v332 = v191[1];
          const v339 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v341 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v343 = v341 ? false : true;
          const v346 = v343 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v349 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v353 = v351 ? false : true;
          const v356 = v353 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v358 = stdlib.add(v346, v356);
          const v360 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v362 = stdlib.eq(v360, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v364 = v362 ? false : true;
          const v367 = v364 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v369 = stdlib.add(v358, v367);
          const v371 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v373 = stdlib.eq(v371, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v375 = v373 ? false : true;
          const v378 = v375 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v380 = stdlib.add(v369, v378);
          const v382 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v384 = stdlib.eq(v382, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v386 = v384 ? false : true;
          const v389 = v386 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v391 = stdlib.add(v380, v389);
          const v393 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v395 = stdlib.eq(v393, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v397 = v395 ? false : true;
          const v400 = v397 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v402 = stdlib.add(v391, v400);
          const v404 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v406 = stdlib.eq(v404, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v408 = v406 ? false : true;
          const v411 = v408 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v413 = stdlib.add(v402, v411);
          const v415 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v417 = stdlib.eq(v415, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v419 = v417 ? false : true;
          const v422 = v419 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v424 = stdlib.add(v413, v422);
          const v426 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v428 = stdlib.eq(v426, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v430 = v428 ? false : true;
          const v433 = v430 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v435 = stdlib.add(v424, v433);
          const v437 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v439 = stdlib.eq(v437, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v441 = v439 ? false : true;
          const v444 = v441 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v446 = stdlib.add(v435, v444);
          const v449 = stdlib.add(v446, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v450 = stdlib.mul(v446, v449);
          const v451 = stdlib.mul(v450, v5);
          const v452 = stdlib.div(v451, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          sim_r.txns.push({
            amt: v452,
            to: v4
             });
          const cv11 = v11;
          const cv473 = v321;
          
          (() => {
            const v11 = cv11;
            const v473 = cv473;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:43:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v473]);
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
      const v459 = txn3.value;
      const v464 = txn3.time;
      const v458 = txn3.from;
      const v460 = stdlib.eq(v459, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v460, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      const v461 = stdlib.addressEq(v4, v458);
      stdlib.assert(v461, {
        at: './index.rsh:67:33:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const cv11 = v11;
      const cv473 = v464;
      
      v11 = cv11;
      v473 = cv473;
      
      continue;
       }
    else {
      const [v191] = txn2.data;
      const v192 = txn2.value;
      const v321 = txn2.time;
      const v190 = txn2.from;
      let v193;
      switch (v191[0]) {
        case 'Creator': {
          
          v193 = stdlib.checkedBigNumberify('./index.rsh:46:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v197 = v191[1];
          const v201 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v203 = stdlib.eq(v201, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v205 = v203 ? false : true;
          const v208 = v205 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v211 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v213 = stdlib.eq(v211, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v215 = v213 ? false : true;
          const v218 = v215 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v220 = stdlib.add(v208, v218);
          const v222 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v224 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v226 = v224 ? false : true;
          const v229 = v226 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v231 = stdlib.add(v220, v229);
          const v233 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v235 = stdlib.eq(v233, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v237 = v235 ? false : true;
          const v240 = v237 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v242 = stdlib.add(v231, v240);
          const v244 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v246 = stdlib.eq(v244, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v248 = v246 ? false : true;
          const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v253 = stdlib.add(v242, v251);
          const v255 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v259 = v257 ? false : true;
          const v262 = v259 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v264 = stdlib.add(v253, v262);
          const v266 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v268 = stdlib.eq(v266, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v270 = v268 ? false : true;
          const v273 = v270 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v275 = stdlib.add(v264, v273);
          const v277 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v279 = stdlib.eq(v277, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v281 = v279 ? false : true;
          const v284 = v281 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v286 = stdlib.add(v275, v284);
          const v288 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v290 = stdlib.eq(v288, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v292 = v290 ? false : true;
          const v295 = v292 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v297 = stdlib.add(v286, v295);
          const v299 = v197[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v301 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v303 = v301 ? false : true;
          const v306 = v303 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v308 = stdlib.add(v297, v306);
          const v311 = stdlib.add(v308, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v312 = stdlib.mul(v308, v311);
          const v313 = stdlib.mul(v312, v5);
          const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          v193 = v314;
          
          break;
           }
         }
      const v318 = stdlib.eq(v192, v193);
      stdlib.assert(v318, {
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
      let v322;
      switch (v191[0]) {
        case 'Creator': {
          
          const v324 = stdlib.eq(v190, v4);
          v322 = v324;
          
          break;
           }
        case 'Player': {
          const v327 = v191[1];
          v322 = true;
          
          break;
           }
         }
      stdlib.assert(v322, {
        at: './index.rsh:45:21:application',
        fs: [],
        msg: null,
        who: 'Player'
         });
      switch (v191[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv473 = v321;
          
          v11 = cv11;
          v473 = cv473;
          
          continue;
          break;
           }
        case 'Player': {
          const v332 = v191[1];
          stdlib.protect(ctc2, await interact.seeMove(v332), {
            at: './index.rsh:62:49:application',
            fs: ['at ./index.rsh:61:40:application call to [unknown function] (defined at: ./index.rsh:61:44:function exp)'],
            msg: 'seeMove',
            who: 'Player'
             });
          
          const v339 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 0)];
          const v341 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v343 = v341 ? false : true;
          const v346 = v343 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v349 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 1)];
          const v351 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v353 = v351 ? false : true;
          const v356 = v353 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v358 = stdlib.add(v346, v356);
          const v360 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 2)];
          const v362 = stdlib.eq(v360, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v364 = v362 ? false : true;
          const v367 = v364 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v369 = stdlib.add(v358, v367);
          const v371 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 3)];
          const v373 = stdlib.eq(v371, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v375 = v373 ? false : true;
          const v378 = v375 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v380 = stdlib.add(v369, v378);
          const v382 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 4)];
          const v384 = stdlib.eq(v382, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v386 = v384 ? false : true;
          const v389 = v386 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v391 = stdlib.add(v380, v389);
          const v393 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 5)];
          const v395 = stdlib.eq(v393, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v397 = v395 ? false : true;
          const v400 = v397 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v402 = stdlib.add(v391, v400);
          const v404 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 6)];
          const v406 = stdlib.eq(v404, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v408 = v406 ? false : true;
          const v411 = v408 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v413 = stdlib.add(v402, v411);
          const v415 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 7)];
          const v417 = stdlib.eq(v415, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v419 = v417 ? false : true;
          const v422 = v419 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v424 = stdlib.add(v413, v422);
          const v426 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 8)];
          const v428 = stdlib.eq(v426, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v430 = v428 ? false : true;
          const v433 = v430 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v435 = stdlib.add(v424, v433);
          const v437 = v332[stdlib.checkedBigNumberify('./index.rsh:7:23:array ref', stdlib.UInt_max, 9)];
          const v439 = stdlib.eq(v437, stdlib.checkedBigNumberify('./index.rsh:7:30:decimal', stdlib.UInt_max, 0));
          const v441 = v439 ? false : true;
          const v444 = v441 ? stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, 0);
          const v446 = stdlib.add(v435, v444);
          const v449 = stdlib.add(v446, stdlib.checkedBigNumberify('./index.rsh:15:26:decimal', stdlib.UInt_max, 1));
          const v450 = stdlib.mul(v446, v449);
          const v451 = stdlib.mul(v450, v5);
          const v452 = stdlib.div(v451, stdlib.checkedBigNumberify('./index.rsh:15:40:decimal', stdlib.UInt_max, 2));
          ;
          const cv11 = v11;
          const cv473 = v321;
          
          v11 = cv11;
          v473 = cv473;
          
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
int 2
/
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
int 2
/
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
                "name": "v473",
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
                "name": "v191",
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
                "name": "v473",
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
                "name": "v473",
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
                "name": "v191",
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
                "name": "v473",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b610e51806100ab6000396000f3fe6080604052600436106100345760003560e01c80639532ef0114610039578063a9dfc4561461004e578063f01a326c14610061575b600080fd5b61004c610047366004610c5b565b610074565b005b61004c61005c366004610c32565b610127565b61004c61006f366004610c4a565b610928565b604051610088906000908390602001610d4d565b6040516020818303038152906040528051906020012060001c600054146100ae57600080fd5b34156100b957600080fd5b7ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166816040516100e89190610d36565b60405180910390a16100f8610ac5565b8051339052805160208084013591810191909152808201805160019052514391015261012381610a42565b5050565b60405161013b906002908390602001610d5c565b6040516020818303038152906040528051906020012060001c6000541461016157600080fd5b610169610aea565b6101796104006060840135610dae565b431061018457600080fd5b600061019660a0840160808501610c18565b60018111156101b557634e487b7160e01b600052602160045260246000fd5b14156101c4576000815261043c565b60016101d660a0840160808501610c18565b60018111156101f557634e487b7160e01b600052602160045260246000fd5b141561043c57604080516101408181019092529060c0840190600a90839083908082843760009201919091525050506020820181905261012001511561023c57600161023f565b60005b61024a57600061024d565b60015b6020820151610100015115610263576001610266565b60005b610271576000610274565b60015b602083015160e001511561028957600161028c565b60005b61029757600061029a565b60015b602084015160c00151156102af5760016102b2565b60005b6102bd5760006102c0565b60015b602085015160a00151156102d55760016102d8565b60005b6102e35760006102e6565b60015b602086015160800151156102fb5760016102fe565b60005b61030957600061030c565b60015b60208701516060015115610321576001610324565b60005b61032f576000610332565b60015b6020880151604001511561034757600161034a565b60005b610355576000610358565b60015b60208981015101511561036c57600161036f565b60005b61037a57600061037d565b60015b60208a0151511561038f576001610392565b60005b61039d5760006103a0565b60015b6103aa9190610dae565b6103b49190610dae565b6103be9190610dae565b6103c89190610dae565b6103d29190610dae565b6103dc9190610dae565b6103e69190610dae565b6103f09190610dae565b6103fa9190610dae565b6040820181905260029060208401359061041690600190610dae565b83604001516104259190610de6565b61042f9190610de6565b6104399190610dc6565b81525b8051341461044957600080fd5b600061045b60a0840160808501610c18565b600181111561047a57634e487b7160e01b600052602160045260246000fd5b14156104a25761048d6020830183610bdd565b6001600160a01b03163314606082015261050f565b60016104b460a0840160808501610c18565b60018111156104d357634e487b7160e01b600052602160045260246000fd5b141561050f57604080516101408181019092529060c0840190600a90839083908082843760009201919091525050506080820152600160608201525b806060015161051d57600080fd5b600061052f60a0840160808501610c18565b600181111561054e57634e487b7160e01b600052602160045260246000fd5b14156105db577f2458bbd82562e0fce1e01f61c6b190fb0ab28bf2d071d17e6eebc6deb88a8c3d826040516105839190610ca8565b60405180910390a1610593610ac5565b6105a06020840184610bdd565b81516001600160a01b03909116905280516020808501359181019190915280820180516000905251439101526105d581610a42565b50610123565b60016105ed60a0840160808501610c18565b600181111561060c57634e487b7160e01b600052602160045260246000fd5b141561012357604080516101408181019092529060c0840190600a908390839080828437600092019190915250505060a08201819052610120015115610653576001610656565b60005b610661576000610664565b60015b60a082015161010001511561067a57600161067d565b60005b61068857600061068b565b60015b60a083015160e00151156106a05760016106a3565b60005b6106ae5760006106b1565b60015b60a084015160c00151156106c65760016106c9565b60005b6106d45760006106d7565b60015b60a0858101510151156106eb5760016106ee565b60005b6106f95760006106fc565b60015b60a08601516080015115610711576001610714565b60005b61071f576000610722565b60015b60a0870151606001511561073757600161073a565b60005b610745576000610748565b60015b60a0880151604001511561075d576001610760565b60005b61076b57600061076e565b60015b60a08901516020015115610783576001610786565b60005b610791576000610794565b60015b60a08a015151156107a65760016107a9565b60005b6107b45760006107b7565b60015b6107c19190610dae565b6107cb9190610dae565b6107d59190610dae565b6107df9190610dae565b6107e99190610dae565b6107f39190610dae565b6107fd9190610dae565b6108079190610dae565b6108119190610dae565b60c08201526108236020830183610bdd565b6001600160a01b03166108fc6002846000016020013560018560c0015161084a9190610dae565b8560c001516108599190610de6565b6108639190610de6565b61086d9190610dc6565b6040518115909202916000818181858888f19350505050158015610895573d6000803e3d6000fd5b507f2458bbd82562e0fce1e01f61c6b190fb0ab28bf2d071d17e6eebc6deb88a8c3d826040516108c59190610ca8565b60405180910390a16108d5610ac5565b6108e26020840184610bdd565b81516001600160a01b039091169052805160208085013591015261090c6060840160408501610bfe565b602080830180519215159092529051439101526105d581610a42565b60405161093c906002908390602001610d5c565b6040516020818303038152906040528051906020012060001c6000541461096257600080fd5b6109726104006060830135610dae565b431015801561097f575060015b61098857600080fd5b341561099357600080fd5b336109a16020830183610bdd565b6001600160a01b0316146109b457600080fd5b7f056f3bdc744f406723f7387e7270a1b63bd96859b93e78ad3d5472905e654988816040516109e39190610d0f565b60405180910390a16109f3610ac5565b610a006020830183610bdd565b81516001600160a01b0390911690528051602080840135910152610a2a6060830160408401610bfe565b60208083018051921515909252905143910152610123815b60208101515115610abb57610a55610b39565b8151516001600160a01b0316815281516020908101518183015280830180515115156040808501919091529051820151606084015251610a9a91600291849101610d70565b60408051601f19818403018152919052805160209091012060005550610ac2565b6000805533ff5b50565b6040518060400160405280610ad8610b6c565b8152602001610ae5610b6c565b905290565b6040518060e0016040528060008152602001610b04610b83565b81526000602082018190526040820152606001610b1f610b83565b8152602001610b2c610b83565b8152602001600081525090565b604051806080016040528060006001600160a01b0316815260200160008152602001600015158152602001600081525090565b604080518082019091526000808252602082015290565b604051806101400160405280600a906020820280368337509192915050565b80356001600160a01b0381168114610bb957600080fd5b919050565b80358015158114610bb957600080fd5b803560028110610bb957600080fd5b600060208284031215610bee578081fd5b610bf782610ba2565b9392505050565b600060208284031215610c0f578081fd5b610bf782610bbe565b600060208284031215610c29578081fd5b610bf782610bce565b60006102008284031215610c44578081fd5b50919050565b600060a08284031215610c44578081fd5b600060408284031215610c44578081fd5b6001600160a01b03610c7d82610ba2565b16825260208101356020830152610c9660408201610bbe565b15156040830152606090810135910152565b6102008101610cb78284610c6c565b610cc360808401610bce565b60028110610ce157634e487b7160e01b600052602160045260246000fd5b6080830152610cf260a08401610bbe565b151560a083015261014060c0840160c08401376000815292915050565b60a08101610d1d8284610c6c565b610d2960808401610bbe565b1515608083015292915050565b813581526020918201359181019190915260400190565b91825235602082015260400190565b82815260a08101610bf76020830184610c6c565b91825280516001600160a01b031660208084019190915281015160408084019190915281015115156060808401919091520151608082015260a00190565b60008219821115610dc157610dc1610e05565b500190565b600082610de157634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610e0057610e00610e05565b500290565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202f7c3e9d6289697ed81934bedcf1e8b0d477e306bbc9e12624761459f20c71c164736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

