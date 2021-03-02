// Automatically generated with Reach 0.1.2
/* eslint-disable no-unused-vars, no-empty-pattern, no-useless-escape, no-loop-func */
export const _version = '0.1.2';


export async function Observer(ctc, interact) {
  const stdlib = ctc.stdlib;
  
  const v0 = await ctc.creationTime();
  const v3 = stdlib.protect(stdlib.T_Object({
    moveLimit: stdlib.T_UInt,
    payoutPerDuration: stdlib.T_UInt
     }), await interact.getParams(), {
    at: './index.rsh:101:41:application',
    fs: ['at ./index.rsh:100:18:application call to [unknown function] (defined at: ./index.rsh:100:22:function exp)'],
    msg: 'getParams',
    who: 'Observer'
     });
  const v4 = v3.moveLimit;
  const v5 = stdlib.gt(v4, stdlib.checkedBigNumberify('./index.rsh:102:34:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v5, {
    at: './index.rsh:102:13:application',
    fs: ['at ./index.rsh:100:18:application call to [unknown function] (defined at: ./index.rsh:100:22:function exp)'],
    msg: null,
    who: 'Observer'
     });
  const v6 = v3.payoutPerDuration;
  const txn1 = await (ctc.sendrecv('Observer', 1, 2, stdlib.checkedBigNumberify('./index.rsh:105:14:dot', stdlib.UInt_max, 0), [stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], [v0, v6, v4], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [stdlib.T_UInt, stdlib.T_UInt], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:105:14:dot', stdlib.UInt_max, 0), v0]);
    sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:105:14:dot', stdlib.UInt_max, 0)]);
    const [v9, v10] = txn1.data;
    const v11 = txn1.value;
    const v15 = txn1.time;
    const v8 = txn1.from;
    
    const v12 = stdlib.eq(v11, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v12, {
      at: './index.rsh:105:14:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Observer'
       });
    stdlib.assert(true, {
      at: './index.rsh:105:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Observer'
       });
    const v14 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v11);
    const v16 = stdlib.ge(v10, stdlib.checkedBigNumberify('./index.rsh:107:26:decimal', stdlib.UInt_max, 1));
    stdlib.assert(v16, {
      at: './index.rsh:107:12:application',
      fs: [],
      msg: null,
      who: 'Observer'
       });
    const v44 = [stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0)];
    const v45 = {
      moveList: v44,
      movePlayed: stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, 0),
      totalPayout: stdlib.checkedBigNumberify('./index.rsh:112:20:decimal', stdlib.UInt_max, 0)
       };
    const v43 = v45;
    const v135 = v14;
    const v136 = v15;
    const v137 = v0;
    
    if ((() => {
      const v49 = v43.movePlayed;
      const v50 = stdlib.lt(v49, v10);
      
      return v50; })()) {
      sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:17:after expr stmt semicolon', stdlib.UInt_max, 2), v8, v10, v43, v135, v136]);
      sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:17:after expr stmt semicolon', stdlib.UInt_max, 2), v8, v10, v43, v135]);
      sim_r.isHalt = false;
       }
    else {
      sim_r.txns.push({
        amt: v135,
        to: v8
         });
      sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
      sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
      sim_r.isHalt = true;
       }
    return sim_r;
     })));
  const [v9, v10] = txn1.data;
  const v11 = txn1.value;
  const v15 = txn1.time;
  const v8 = txn1.from;
  const v12 = stdlib.eq(v11, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v12, {
    at: './index.rsh:105:14:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Observer'
     });
  stdlib.assert(true, {
    at: './index.rsh:105:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Observer'
     });
  const v14 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v11);
  const v16 = stdlib.ge(v10, stdlib.checkedBigNumberify('./index.rsh:107:26:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v16, {
    at: './index.rsh:107:12:application',
    fs: [],
    msg: null,
    who: 'Observer'
     });
  const v44 = [stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0)];
  const v45 = {
    moveList: v44,
    movePlayed: stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, 0),
    totalPayout: stdlib.checkedBigNumberify('./index.rsh:112:20:decimal', stdlib.UInt_max, 0)
     };
  let v43 = v45;
  let v135 = v14;
  let v136 = v15;
  let v137 = v0;
  
  while ((() => {
    const v49 = v43.movePlayed;
    const v50 = stdlib.lt(v49, v10);
    
    return v50; })()) {
    const v53 = v43.movePlayed;
    stdlib.protect(stdlib.T_Null, await interact.observeTurnStart(v53), {
      at: './index.rsh:118:53:application',
      fs: ['at ./index.rsh:118:22:application call to [unknown function] (defined at: ./index.rsh:118:25:function exp)'],
      msg: 'observeTurnStart',
      who: 'Observer'
       });
    const txn2 = await (ctc.sendrecv('Observer', 4, 0, stdlib.checkedBigNumberify('./index.rsh:119:18:dot', stdlib.UInt_max, 4), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
      moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
      movePlayed: stdlib.T_UInt,
      totalPayout: stdlib.T_UInt
       }), stdlib.T_UInt, stdlib.T_UInt], [v8, v10, v43, v135, v136], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:119:18:dot', stdlib.UInt_max, 2), v8, v10, v43, v135, v136]);
      sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:119:18:dot', stdlib.UInt_max, 2), v8, v10, v43, v135]);
      const [] = txn2.data;
      const v55 = txn2.value;
      const v60 = txn2.time;
      const v54 = txn2.from;
      
      const v56 = stdlib.eq(v55, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v56, {
        at: './index.rsh:119:18:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Observer'
         });
      const v57 = stdlib.addressEq(v8, v54);
      stdlib.assert(v57, {
        at: './index.rsh:119:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Observer'
         });
      const v59 = stdlib.add(v135, v55);
      sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:120:17:after expr stmt semicolon', stdlib.UInt_max, 4), v8, v10, v43, v59, v60]);
      sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:120:17:after expr stmt semicolon', stdlib.UInt_max, 4), v8, v10, v43, v59]);
      sim_r.isHalt = false;
      
      return sim_r;
       })));
    const [] = txn2.data;
    const v55 = txn2.value;
    const v60 = txn2.time;
    const v54 = txn2.from;
    const v56 = stdlib.eq(v55, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v56, {
      at: './index.rsh:119:18:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Observer'
       });
    const v57 = stdlib.addressEq(v8, v54);
    stdlib.assert(v57, {
      at: './index.rsh:119:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Observer'
       });
    const v59 = stdlib.add(v135, v55);
    const txn3 = await (ctc.recv('Observer', 5, 1, [stdlib.T_Bool], false, false));
    const [v66] = txn3.data;
    const v67 = txn3.value;
    const v71 = txn3.time;
    const v65 = txn3.from;
    const v68 = stdlib.eq(v67, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v68, {
      at: './index.rsh:126:16:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Observer'
       });
    stdlib.assert(true, {
      at: './index.rsh:126:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Observer'
       });
    const v70 = stdlib.add(v59, v67);
    if (v66) {
      const txn4 = await (ctc.recv('Observer', 6, 3, [stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], false, false));
      const [v85, v86, v87] = txn4.data;
      const v88 = txn4.value;
      const v92 = txn4.time;
      const v84 = txn4.from;
      const v89 = stdlib.eq(v88, v87);
      stdlib.assert(v89, {
        at: './index.rsh:139:18:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Observer'
         });
      stdlib.assert(true, {
        at: './index.rsh:139:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Observer'
         });
      const v91 = stdlib.add(v70, v88);
      const v93 = v43.moveList;
      const v94 = v43.movePlayed;
      const v96 = stdlib.mod(v94, stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, 10));
      const v99 = stdlib.Array_set(v93, v96, v85);
      const v102 = stdlib.add(v94, stdlib.checkedBigNumberify('./index.rsh:144:46:decimal', stdlib.UInt_max, 1));
      const v104 = v43.totalPayout;
      const v106 = stdlib.add(v104, v87);
      if (v66) {
        stdlib.protect(stdlib.T_Null, await interact.observeMoves(v93), {
          at: './index.rsh:152:36:application',
          fs: ['at ./index.rsh:150:24:application call to [unknown function] (defined at: ./index.rsh:150:28:function exp)'],
          msg: 'observeMoves',
          who: 'Observer'
           });
         }
      else {
         }
      const txn5 = await (ctc.sendrecv('Observer', 7, 0, stdlib.checkedBigNumberify('./index.rsh:155:20:dot', stdlib.UInt_max, 3), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)), stdlib.T_UInt, stdlib.T_UInt], [v8, v10, v91, v92, v99, v102, v106], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn5) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:155:20:dot', stdlib.UInt_max, 6), v8, v10, v91, v92, v99, v102, v106]);
        sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:155:20:dot', stdlib.UInt_max, 6), v8, v10, v91, v99, v102, v106]);
        const [] = txn5.data;
        const v112 = txn5.value;
        const v117 = txn5.time;
        const v111 = txn5.from;
        
        const v113 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v113, {
          at: './index.rsh:155:20:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Observer'
           });
        const v114 = stdlib.addressEq(v8, v111);
        stdlib.assert(v114, {
          at: './index.rsh:155:20:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Observer'
           });
        const v116 = stdlib.add(v91, v112);
        const v118 = {
          moveList: v99,
          movePlayed: v102,
          totalPayout: v106
           };
        const cv43 = v118;
        const cv135 = v116;
        const cv136 = v117;
        const cv137 = v92;
        
        (() => {
          const v43 = cv43;
          const v135 = cv135;
          const v136 = cv136;
          const v137 = cv137;
          
          if ((() => {
            const v49 = v43.movePlayed;
            const v50 = stdlib.lt(v49, v10);
            
            return v50; })()) {
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
              moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
              movePlayed: stdlib.T_UInt,
              totalPayout: stdlib.T_UInt
               }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:17:after expr stmt semicolon', stdlib.UInt_max, 2), v8, v10, v43, v135, v136]);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
              moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
              movePlayed: stdlib.T_UInt,
              totalPayout: stdlib.T_UInt
               }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:17:after expr stmt semicolon', stdlib.UInt_max, 2), v8, v10, v43, v135]);
            sim_r.isHalt = false;
             }
          else {
            sim_r.txns.push({
              amt: v135,
              to: v8
               });
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
            sim_r.isHalt = true;
             } })();
        return sim_r;
         })));
      const [] = txn5.data;
      const v112 = txn5.value;
      const v117 = txn5.time;
      const v111 = txn5.from;
      const v113 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v113, {
        at: './index.rsh:155:20:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Observer'
         });
      const v114 = stdlib.addressEq(v8, v111);
      stdlib.assert(v114, {
        at: './index.rsh:155:20:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Observer'
         });
      const v116 = stdlib.add(v91, v112);
      const v118 = {
        moveList: v99,
        movePlayed: v102,
        totalPayout: v106
         };
      const cv43 = v118;
      const cv135 = v116;
      const cv136 = v117;
      const cv137 = v92;
      
      v43 = cv43;
      v135 = cv135;
      v136 = cv136;
      v137 = cv137;
      
      continue;
      
       }
    else {
      const v119 = v43.moveList;
      const v120 = v43.movePlayed;
      const v122 = stdlib.add(v120, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 1));
      const v124 = v43.totalPayout;
      const v125 = {
        moveList: v119,
        movePlayed: v122,
        totalPayout: v124
         };
      const cv43 = v125;
      const cv135 = v70;
      const cv136 = v71;
      const cv137 = v60;
      
      v43 = cv43;
      v135 = cv135;
      v136 = cv136;
      v137 = cv137;
      
      continue; }
    
     }
  ;
  stdlib.protect(stdlib.T_Null, await interact.observeGameFinish(), {
    at: './index.rsh:179:33:application',
    fs: ['at ./index.rsh:178:18:application call to [unknown function] (defined at: ./index.rsh:178:22:function exp)'],
    msg: 'observeGameFinish',
    who: 'Observer'
     });
  return;
  
   }
export async function Player(ctc, interact) {
  const stdlib = ctc.stdlib;
  
  const v0 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Player', 1, 2, [stdlib.T_UInt, stdlib.T_UInt], false, false));
  const [v9, v10] = txn1.data;
  const v11 = txn1.value;
  const v15 = txn1.time;
  const v8 = txn1.from;
  const v12 = stdlib.eq(v11, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v12, {
    at: './index.rsh:105:14:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Player'
     });
  stdlib.assert(true, {
    at: './index.rsh:105:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
     });
  const v14 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v11);
  const v16 = stdlib.ge(v10, stdlib.checkedBigNumberify('./index.rsh:107:26:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v16, {
    at: './index.rsh:107:12:application',
    fs: [],
    msg: null,
    who: 'Player'
     });
  const v44 = [stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:110:47:decimal', stdlib.UInt_max, 0)];
  const v45 = {
    moveList: v44,
    movePlayed: stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, 0),
    totalPayout: stdlib.checkedBigNumberify('./index.rsh:112:20:decimal', stdlib.UInt_max, 0)
     };
  let v43 = v45;
  let v135 = v14;
  let v136 = v15;
  let v137 = v0;
  
  while ((() => {
    const v49 = v43.movePlayed;
    const v50 = stdlib.lt(v49, v10);
    
    return v50; })()) {
    const txn2 = await (ctc.recv('Player', 4, 0, [], false, false));
    const [] = txn2.data;
    const v55 = txn2.value;
    const v60 = txn2.time;
    const v54 = txn2.from;
    const v56 = stdlib.eq(v55, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v56, {
      at: './index.rsh:119:18:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Player'
       });
    const v57 = stdlib.addressEq(v8, v54);
    stdlib.assert(v57, {
      at: './index.rsh:119:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
       });
    const v59 = stdlib.add(v135, v55);
    const v64 = stdlib.protect(stdlib.T_Bool, await interact.acceptMove(v9), {
      at: './index.rsh:123:58:application',
      fs: ['at ./index.rsh:122:20:application call to [unknown function] (defined at: ./index.rsh:122:24:function exp)'],
      msg: 'acceptMove',
      who: 'Player'
       });
    const txn3 = await (ctc.sendrecv('Player', 5, 1, stdlib.checkedBigNumberify('./index.rsh:126:16:dot', stdlib.UInt_max, 4), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
      moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
      movePlayed: stdlib.T_UInt,
      totalPayout: stdlib.T_UInt
       }), stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Bool], [v8, v10, v43, v59, v60, v64], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [stdlib.T_Bool], true, false, false, ((txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:126:16:dot', stdlib.UInt_max, 4), v8, v10, v43, v59, v60]);
      sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:126:16:dot', stdlib.UInt_max, 4), v8, v10, v43, v59]);
      const [v66] = txn3.data;
      const v67 = txn3.value;
      const v71 = txn3.time;
      const v65 = txn3.from;
      
      const v68 = stdlib.eq(v67, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v68, {
        at: './index.rsh:126:16:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:126:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const v70 = stdlib.add(v59, v67);
      if (v66) {
        sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
          moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
          movePlayed: stdlib.T_UInt,
          totalPayout: stdlib.T_UInt
           }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:130:19:after expr stmt semicolon', stdlib.UInt_max, 5), v8, v10, v43, v70, v71]);
        sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
          moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
          movePlayed: stdlib.T_UInt,
          totalPayout: stdlib.T_UInt
           }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:130:19:after expr stmt semicolon', stdlib.UInt_max, 5), v8, v10, v43, v70]);
        sim_r.isHalt = false;
         }
      else {
        const v119 = v43.moveList;
        const v120 = v43.movePlayed;
        const v122 = stdlib.add(v120, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 1));
        const v124 = v43.totalPayout;
        const v125 = {
          moveList: v119,
          movePlayed: v122,
          totalPayout: v124
           };
        const cv43 = v125;
        const cv135 = v70;
        const cv136 = v71;
        const cv137 = v60;
        
        (() => {
          const v43 = cv43;
          const v135 = cv135;
          const v136 = cv136;
          const v137 = cv137;
          
          if ((() => {
            const v49 = v43.movePlayed;
            const v50 = stdlib.lt(v49, v10);
            
            return v50; })()) {
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
              moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
              movePlayed: stdlib.T_UInt,
              totalPayout: stdlib.T_UInt
               }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:17:after expr stmt semicolon', stdlib.UInt_max, 2), v8, v10, v43, v135, v136]);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
              moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
              movePlayed: stdlib.T_UInt,
              totalPayout: stdlib.T_UInt
               }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:17:after expr stmt semicolon', stdlib.UInt_max, 2), v8, v10, v43, v135]);
            sim_r.isHalt = false;
             }
          else {
            sim_r.txns.push({
              amt: v135,
              to: v8
               });
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
            sim_r.isHalt = true;
             } })(); }
      return sim_r;
       })));
    const [v66] = txn3.data;
    const v67 = txn3.value;
    const v71 = txn3.time;
    const v65 = txn3.from;
    const v68 = stdlib.eq(v67, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v68, {
      at: './index.rsh:126:16:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Player'
       });
    stdlib.assert(true, {
      at: './index.rsh:126:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
       });
    const v70 = stdlib.add(v59, v67);
    if (v66) {
      const v75 = stdlib.protect(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), await interact.getMove(), {
        at: './index.rsh:135:64:application',
        fs: ['at ./index.rsh:134:22:application call to [unknown function] (defined at: ./index.rsh:134:26:function exp)'],
        msg: 'getMove',
        who: 'Player'
         });
      const v76 = v75[stdlib.checkedBigNumberify('./index.rsh:135:19:array', stdlib.UInt_max, 0)];
      const v77 = v75[stdlib.checkedBigNumberify('./index.rsh:135:19:array', stdlib.UInt_max, 1)];
      const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:135:19:array', stdlib.UInt_max, 2)];
      const v79 = stdlib.gt(v76, stdlib.checkedBigNumberify('./index.rsh:136:28:decimal', stdlib.UInt_max, 0));
      const v80 = stdlib.gt(v77, stdlib.checkedBigNumberify('./index.rsh:136:45:decimal', stdlib.UInt_max, 0));
      const v81 = v79 ? v80 : false;
      const v82 = stdlib.gt(v78, stdlib.checkedBigNumberify('./index.rsh:136:59:decimal', stdlib.UInt_max, 0));
      const v83 = v81 ? v82 : false;
      stdlib.assert(v83, {
        at: './index.rsh:136:19:application',
        fs: ['at ./index.rsh:134:22:application call to [unknown function] (defined at: ./index.rsh:134:26:function exp)'],
        msg: '[ERROR] Invalid Move',
        who: 'Player'
         });
      const txn4 = await (ctc.sendrecv('Player', 6, 3, stdlib.checkedBigNumberify('./index.rsh:139:18:dot', stdlib.UInt_max, 4), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
        moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
        movePlayed: stdlib.T_UInt,
        totalPayout: stdlib.T_UInt
         }), stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], [v8, v10, v43, v70, v71, v76, v77, v78], v78, [stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], true, false, false, ((txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
          moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
          movePlayed: stdlib.T_UInt,
          totalPayout: stdlib.T_UInt
           }), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:139:18:dot', stdlib.UInt_max, 5), v8, v10, v43, v70, v71]);
        sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_Object({
          moveList: stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)),
          movePlayed: stdlib.T_UInt,
          totalPayout: stdlib.T_UInt
           }), stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:139:18:dot', stdlib.UInt_max, 5), v8, v10, v43, v70]);
        const [v85, v86, v87] = txn4.data;
        const v88 = txn4.value;
        const v92 = txn4.time;
        const v84 = txn4.from;
        
        const v89 = stdlib.eq(v88, v87);
        stdlib.assert(v89, {
          at: './index.rsh:139:18:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Player'
           });
        stdlib.assert(true, {
          at: './index.rsh:139:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player'
           });
        const v91 = stdlib.add(v70, v88);
        const v93 = v43.moveList;
        const v94 = v43.movePlayed;
        const v96 = stdlib.mod(v94, stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, 10));
        const v99 = stdlib.Array_set(v93, v96, v85);
        const v102 = stdlib.add(v94, stdlib.checkedBigNumberify('./index.rsh:144:46:decimal', stdlib.UInt_max, 1));
        const v104 = v43.totalPayout;
        const v106 = stdlib.add(v104, v87);
        sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:148:19:after expr stmt semicolon', stdlib.UInt_max, 6), v8, v10, v91, v92, v99, v102, v106]);
        sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Array(stdlib.T_UInt, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10)), stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:148:19:after expr stmt semicolon', stdlib.UInt_max, 6), v8, v10, v91, v99, v102, v106]);
        sim_r.isHalt = false;
        
        return sim_r;
         })));
      const [v85, v86, v87] = txn4.data;
      const v88 = txn4.value;
      const v92 = txn4.time;
      const v84 = txn4.from;
      const v89 = stdlib.eq(v88, v87);
      stdlib.assert(v89, {
        at: './index.rsh:139:18:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:139:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const v91 = stdlib.add(v70, v88);
      const v93 = v43.moveList;
      const v94 = v43.movePlayed;
      const v96 = stdlib.mod(v94, stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, 10));
      const v99 = stdlib.Array_set(v93, v96, v85);
      const v102 = stdlib.add(v94, stdlib.checkedBigNumberify('./index.rsh:144:46:decimal', stdlib.UInt_max, 1));
      const v104 = v43.totalPayout;
      const v106 = stdlib.add(v104, v87);
      const txn5 = await (ctc.recv('Player', 7, 0, [], false, false));
      const [] = txn5.data;
      const v112 = txn5.value;
      const v117 = txn5.time;
      const v111 = txn5.from;
      const v113 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v113, {
        at: './index.rsh:155:20:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      const v114 = stdlib.addressEq(v8, v111);
      stdlib.assert(v114, {
        at: './index.rsh:155:20:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const v116 = stdlib.add(v91, v112);
      const v118 = {
        moveList: v99,
        movePlayed: v102,
        totalPayout: v106
         };
      const cv43 = v118;
      const cv135 = v116;
      const cv136 = v117;
      const cv137 = v92;
      
      v43 = cv43;
      v135 = cv135;
      v136 = cv136;
      v137 = cv137;
      
      continue;
      
       }
    else {
      const v119 = v43.moveList;
      const v120 = v43.movePlayed;
      const v122 = stdlib.add(v120, stdlib.checkedBigNumberify('./index.rsh:167:46:decimal', stdlib.UInt_max, 1));
      const v124 = v43.totalPayout;
      const v125 = {
        moveList: v119,
        movePlayed: v122,
        totalPayout: v124
         };
      const cv43 = v125;
      const cv135 = v70;
      const cv136 = v71;
      const cv137 = v60;
      
      v43 = cv43;
      v135 = cv135;
      v136 = cv136;
      v137 = cv137;
      
      continue; }
    
     }
  ;
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
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 2 Args 0
==
assert
byte base64(bA==)
app_global_get
gtxna 2 Args 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 2 Args 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 2 Args 2
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
int 7
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
  stepargs: [0, 97, 0, 0, 225, 226, 249, 225],
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
txn NumArgs
int 7
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:105:14:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:105:14:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
arg 3
btoi
-
+
store 255
// Nothing
// "./index.rsh:107:12:application"
// "[]"
arg 6
btoi
int 1
>=
assert
int 0
itob
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
dup
store 254
substring 80 88
btoi
arg 6
btoi
<
bz l0
// compute state in HM_Set 2
int 2
itob
gtxn 3 Sender
concat
arg 6
concat
load 254
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 3 Sender
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
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
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 2
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
txn NumArgs
int 9
==
assert
// compute state in HM_Check 2
int 2
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:119:18:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:119:18:dot"
// "[]"
arg 5
gtxn 3 Sender
==
assert
arg 8
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 255
// compute state in HM_Set 4
int 4
itob
arg 5
concat
arg 6
concat
arg 7
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
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
arg 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 5
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
txn NumArgs
int 10
==
assert
// compute state in HM_Check 4
int 4
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:126:16:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:126:16:dot"
// "[]"
int 1
assert
arg 8
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 255
arg 9
btoi
bz l0
// compute state in HM_Set 5
int 5
itob
arg 5
concat
arg 6
concat
arg 7
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l0:
arg 7
substring 0 80
arg 7
substring 80 88
btoi
int 1
+
itob
concat
arg 7
substring 88 96
concat
dup
store 254
substring 80 88
btoi
arg 6
btoi
<
bz l1
// compute state in HM_Set 2
int 2
itob
arg 5
concat
arg 6
concat
load 254
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l1:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
arg 5
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
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
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 6
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
txn NumArgs
int 12
==
assert
// compute state in HM_Check 5
int 5
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:139:18:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
arg 11
btoi
==
assert
// Just "sender correct"
// "./index.rsh:139:18:dot"
// "[]"
int 1
assert
arg 8
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 255
arg 7
substring 80 88
btoi
store 254
arg 7
substring 0 80
dup
int 0
int 8
load 254
int 10
%
*
substring3
arg 9
concat
swap
int 8
dup
load 254
int 10
%
*
+
int 80
substring3
concat
store 253
load 254
int 1
+
store 252
arg 7
substring 88 96
btoi
arg 11
btoi
+
store 251
// compute state in HM_Set 6
int 6
itob
arg 5
concat
arg 6
concat
load 255
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
keccak256
arg 1
==
assert
arg 2
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
arg 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 7
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
txn NumArgs
int 11
==
assert
// compute state in HM_Check 6
int 6
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
arg 9
concat
arg 10
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:155:20:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:155:20:dot"
// "[]"
arg 5
gtxn 3 Sender
==
assert
arg 7
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 255
arg 8
arg 9
concat
arg 10
concat
dup
store 254
substring 80 88
btoi
arg 6
btoi
<
bz l0
// compute state in HM_Set 2
int 2
itob
arg 5
concat
arg 6
concat
load 254
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
arg 5
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
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
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
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
                "name": "v0",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v9",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a1",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[10]",
                    "name": "moveList",
                    "type": "uint256[10]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "movePlayed",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalPayout",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T1",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[10]",
                    "name": "moveList",
                    "type": "uint256[10]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "movePlayed",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalPayout",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T1",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a4postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              }
            ],
            "internalType": "struct ReachContract.a5msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[10]",
                    "name": "moveList",
                    "type": "uint256[10]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "movePlayed",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalPayout",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T1",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a5postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a6msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256[10]",
                "name": "v99",
                "type": "uint256[10]"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a6postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v0",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v9",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a1",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[10]",
                    "name": "moveList",
                    "type": "uint256[10]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "movePlayed",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalPayout",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T1",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[10]",
                    "name": "moveList",
                    "type": "uint256[10]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "movePlayed",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalPayout",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T1",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a4postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              }
            ],
            "internalType": "struct ReachContract.a5msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[10]",
                    "name": "moveList",
                    "type": "uint256[10]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "movePlayed",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalPayout",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T1",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a5postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a6msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
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
                "name": "v8",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v10",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256[10]",
                "name": "v99",
                "type": "uint256[10]"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a6postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b611085806100ab6000396000f3fe60806040526004361061004a5760003560e01c806310f48adc1461004f5780633e130c46146100645780634b3bf1b51461007757806377b0d6d91461008a578063ae5f12ff1461009d575b600080fd5b61006261005d366004610ccd565b6100b0565b005b610062610072366004610cde565b610212565b610062610085366004610cde565b61034d565b610062610098366004610d0c565b6104ae565b6100626100ab366004610cfa565b61063b565b6040516100c4906000908390602001610eef565b6040516020818303038152906040528051906020012060001c600054146100ea57600080fd5b6100f2610a10565b34156100fd57600080fd5b60016040830135101561010f57600080fd5b8051600090819052815160209081018290528251604090810183905283516060018390528351608001839052835160a001839052835160c001839052835160e001839052835161010001839052835161012001839052835182850180519190915280519092018390529051810191909152517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e9906101ae908490610e49565b60405180910390a16101be610a35565b8051339052805160408401356020918201528281015190820151526101e4346000610fd0565b602080830180519091019190915280514360409091015251833560609091015261020d81610868565b505050565b604051610226906002908390602001610efe565b6040516020818303038152906040528051906020012060001c6000541461024c57600080fd5b610254610a55565b341561025f57600080fd5b3361026d6020840184610bef565b6001600160a01b03161461028057600080fd5b61028f346101c0840135610fd0565b81526040517fd7d11f38c6fda350abeba0613fbf5351441ff4cda342fe802d0a1ef6d69465df906102c1908490610e6a565b60405180910390a16102d1610a68565b6102de6020840184610bef565b6001600160a01b031681526020808401359082015261030536849003840160408501610c2a565b604080830191909152825160608301524360808301525161032d906004908390602001610f13565b60408051601f198184030181529190528051602090910120600055505050565b604051610361906006908390602001610f28565b6040516020818303038152906040528051906020012060001c6000541461038757600080fd5b61038f610a9b565b341561039a57600080fd5b336103a86020840184610bef565b6001600160a01b0316146103bb57600080fd5b60408051610140818101909252906080840190600a908390839080828437600092019190915250508251919091525080516101c083013560209091015280516101e0830135604091820152517fab832f044c7c8690325548cf54003e01f0da920e9722c1933eceaced1ffc633c90610434908490610ee0565b60405180910390a1610444610a35565b6104516020840184610bef565b81516001600160a01b03909116905280516020808501359181019190915282519082015152610484346040850135610fd0565b60208083018051909101919091528051436040909101525160608085013591015261020d81610868565b6040516104c2906005908390602001610efe565b6040516020818303038152906040528051906020012060001c600054146104e857600080fd5b6104f0610aae565b346102408301351461050157600080fd5b610510346101c0840135610fd0565b8152610180820135602082015260408051610140818101835261056292850190600a9083908390808284376000920191909152505050602083015161055790600a90611003565b61020085013561092a565b6040820152602081015161057890600190610fd0565b60608201526105916102408301356101a0840135610fd0565b60808201526040517f089fe2dcd3437c3783f88063b7d858405a9d315954d7a64c568da0732d66bc7d906105c6908490610ea9565b60405180910390a16105d6610acf565b6105e36020840184610bef565b6001600160a01b0316815260208084013581830152825160408084019190915243606080850191909152818501516080808601919091529085015160a085015284015160c08401525161032d91600691849101610f3d565b60405161064f906004908390602001610efe565b6040516020818303038152906040528051906020012060001c6000541461067557600080fd5b61067d610b07565b341561068857600080fd5b610697346101c0840135610fd0565b81526106ab61022083016102008401610c10565b1561076c577fd485a1a003819d2f642f312524d4a46496e3a31df70fd4ef8594eb1f6c809b15826040516106df9190610e7f565b60405180910390a16106ef610a68565b6106fc6020840184610bef565b6001600160a01b031681526020808401359082015261072336849003840160408501610c2a565b604080830191909152825160608301524360808301525161074b906005908390602001610f13565b60408051601f19818403018152919052805160209091012060005550610864565b6040805161014081810183529091840190600a90839083908082843760009201919091525050506020820151526107a96001610180840135610fd0565b6020808301805190910191909152516101a0830135604091820152517fd485a1a003819d2f642f312524d4a46496e3a31df70fd4ef8594eb1f6c809b15906107f2908490610e7f565b60405180910390a1610802610a35565b61080f6020840184610bef565b81516001600160a01b039091169052805160208085013591810191909152828101518183018051919091528351815190920191909152805143604090910152516101e084013560609091015261020d81610868565b5050565b805160209081015181830151519091015110156108f557610887610a68565b8151516001600160a01b031681528151602090810151818301528083018051516040808501919091528151830151606085015290518101516080840152516108d491600291849101610f13565b60408051601f19818403018152919052805160209091012060005550610927565b6108fd610b21565b81515181516001600160a01b039091169052602080830151810151825190910152610864816109c8565b50565b610932610b34565b60005b600a81101561099a578481600a811061095e57634e487b7160e01b600052603260045260246000fd5b60200201518282600a811061098357634e487b7160e01b600052603260045260246000fd5b60200201528061099281610fe8565b915050610935565b50818184600a81106109bc57634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b805180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a08573d6000803e3d6000fd5b506000805533ff5b6040518060400160405280610a23610b34565b8152602001610a30610b53565b905290565b6040518060400160405280610a48610b66565b8152602001610a30610b7d565b6040518060200160405280600081525090565b6040805160a08101825260008082526020820152908101610a87610b53565b815260200160008152602001600081525090565b6040518060200160405280610a30610b53565b6040518060a001604052806000815260200160008152602001610a87610b34565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001610a87610b34565b604051806040016040528060008152602001610a30610b53565b6040518060200160405280610a30610b66565b604051806101400160405280600a906020820280368337509192915050565b6040518060600160405280610a87610b34565b604080518082019091526000808252602082015290565b6040518060800160405280610b90610b53565b81526020016000815260200160008152602001600081525090565b80356001600160a01b0381168114610bc257600080fd5b919050565b80358015158114610bc257600080fd5b60006102008284031215610be9578081fd5b50919050565b600060208284031215610c00578081fd5b610c0982610bab565b9392505050565b600060208284031215610c21578081fd5b610c0982610bc7565b60006101808284031215610c3c578081fd5b6040516060810181811067ffffffffffffffff82111715610c5f57610c5f611039565b604052601f83018413610c70578182fd5b610140610c7c81610fa6565b90840190808587841115610c8e578586fd5b855b600a811015610caf578135845260209384019390910190600101610c90565b50508352503560208201526101609290920135604083015250919050565b600060608284031215610be9578081fd5b60006102008284031215610cf0578081fd5b610c098383610bd7565b60006102208284031215610be9578081fd5b60006102608284031215610be9578081fd5b8060005b600a811015610d41578151845260209384019390910190600101610d22565b50505050565b6001600160a01b03610d5882610bab565b1682526020810135602083015261014060408201604084013761018081810135908301526101a080820135908301526101c080820135908301526101e090810135910152565b60018060a01b038151168252602081015160208301526040810151610dc7604084018251610d1e565b6020810151610180840152604001516101a083015260608101516101c0830152608001516101e090910152565b6001600160a01b03610e0582610bab565b1682526020810135602083015260408101356040830152606081013560608301526101406080820160808401376101c081810135908301526101e090810135910152565b81358152602080830135908201526040918201359181019190915260600190565b6102008101610e798284610d47565b92915050565b6102208101610e8e8284610d47565b610200610e9c818501610bc7565b1515818401525092915050565b6102608101610eb88284610d47565b6102008381013590830152610220808401359083015261024092830135929091019190915290565b6102008101610e798284610df4565b91825235602082015260400190565b8281526102208101610c096020830184610d47565b8281526102208101610c096020830184610d9e565b8281526102208101610c096020830184610df4565b60006102208201905083825260018060a01b0383511660208301526020830151604083015260408301516060830152606083015160808301526080830151610f8860a0840182610d1e565b5060a08301516101e083015260c08301516102008301529392505050565b60405181810167ffffffffffffffff81118282101715610fc857610fc8611039565b604052919050565b60008219821115610fe357610fe3611023565b500190565b6000600019821415610ffc57610ffc611023565b5060010190565b60008261101e57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201ce4f8f27286438befd1b54f3bd92379ec7c0099b9a7a55aad715ce49b3a4ec464736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

