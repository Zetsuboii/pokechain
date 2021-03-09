// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Creator(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    Creator: ctc2,
    Player: ctc0
     });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0]);
  
  
  const v1 = await ctc.creationTime();
  const v0 = stdlib.protect(ctc0, interact.price, null);
  const txn1 = await (ctc.sendrecv('Creator', 1, 1, stdlib.checkedBigNumberify('./index.rsh:21:21:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v1, v0], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:21:21:dot', stdlib.UInt_max, 0), v1]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:21:21:dot', stdlib.UInt_max, 0)]);
    const [v5] = txn1.data;
    const v6 = txn1.value;
    const v10 = txn1.time;
    const v4 = txn1.from;
    
    const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v7, {
      at: './index.rsh:21:21:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Creator'
       });
    stdlib.assert(true, {
      at: './index.rsh:21:21:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
       });
    const v9 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v6);
    const v11 = true;
    const v100 = v9;
    const v101 = v10;
    const v102 = v1;
    
    if ((() => {
      
      return v11; })()) {
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100]);
      sim_r.isHalt = false;
       }
    else {
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
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
    at: './index.rsh:21:21:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Creator'
     });
  stdlib.assert(true, {
    at: './index.rsh:21:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
     });
  const v9 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v6);
  let v11 = true;
  let v100 = v9;
  let v101 = v10;
  let v102 = v1;
  
  while ((() => {
    
    return v11; })()) {
    const v33 = stdlib.protect(ctc1, await interact.shouldEnd(), {
      at: './index.rsh:30:60:application',
      fs: ['at ./index.rsh:28:21:application call to [unknown function] (defined at: ./index.rsh:29:40:function exp)', 'at ./index.rsh:28:21:application call to [unknown function] (defined at: ./index.rsh:28:21:function exp)'],
      msg: 'shouldEnd',
      who: 'Creator'
       });
    const v47 = ['Creator', null];
    const txn2 = await (ctc.sendrecv('Creator', 3, 1, stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc1, ctc0, ctc0, ctc3], [v4, v5, v11, v100, v101, v47], stdlib.checkedBigNumberify('./index.rsh:29:26:decimal', stdlib.UInt_max, 0), [ctc3], v33, false, stdlib.checkedBigNumberify('./index.rsh:49:30:decimal', stdlib.UInt_max, 1024), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v100]);
      const [v58] = txn2.data;
      const v59 = txn2.value;
      const v71 = txn2.time;
      const v57 = txn2.from;
      
      let v60;
      switch (v58[0]) {
        case 'Creator': {
          
          v60 = stdlib.checkedBigNumberify('./index.rsh:29:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v64 = v58[1];
          v60 = v5;
          
          break;
           }
         }
      const v68 = stdlib.eq(v59, v60);
      stdlib.assert(v68, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      stdlib.assert(true, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      const v70 = stdlib.add(v100, v59);
      let v72;
      switch (v58[0]) {
        case 'Creator': {
          
          const v74 = stdlib.eq(v57, v4);
          v72 = v74;
          
          break;
           }
        case 'Player': {
          const v77 = v58[1];
          v72 = true;
          
          break;
           }
         }
      stdlib.assert(v72, {
        at: './index.rsh:28:21:application',
        fs: [],
        msg: null,
        who: 'Creator'
         });
      switch (v58[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv100 = v70;
          const cv101 = v71;
          const cv102 = v101;
          
          (() => {
            const v11 = cv11;
            const v100 = cv100;
            const v101 = cv101;
            const v102 = cv102;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
        case 'Player': {
          const v82 = v58[1];
          sim_r.txns.push({
            amt: v5,
            to: v4
             });
          const v90 = stdlib.sub(v70, v5);
          const cv11 = v11;
          const cv100 = v90;
          const cv101 = v71;
          const cv102 = v101;
          
          (() => {
            const v11 = cv11;
            const v100 = cv100;
            const v101 = cv101;
            const v102 = cv102;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
         }
      return sim_r;
       })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv('Creator', 4, 0, stdlib.checkedBigNumberify('./index.rsh:50:33:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc1, ctc0, ctc0], [v4, v5, v11, v100, v101], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:50:33:dot', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:50:33:dot', stdlib.UInt_max, 2), v4, v5, v11, v100]);
        const [] = txn3.data;
        const v92 = txn3.value;
        const v97 = txn3.time;
        const v91 = txn3.from;
        
        const v93 = stdlib.eq(v92, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v93, {
          at: './index.rsh:50:33:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Creator'
           });
        const v94 = stdlib.addressEq(v4, v91);
        stdlib.assert(v94, {
          at: './index.rsh:50:33:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
           });
        const v96 = stdlib.add(v100, v92);
        const cv11 = v11;
        const cv100 = v96;
        const cv101 = v97;
        const cv102 = v101;
        
        (() => {
          const v11 = cv11;
          const v100 = cv100;
          const v101 = cv101;
          const v102 = cv102;
          
          if ((() => {
            
            return v11; })()) {
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100]);
            sim_r.isHalt = false;
             }
          else {
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.isHalt = true;
             } })();
        return sim_r;
         })));
      const [] = txn3.data;
      const v92 = txn3.value;
      const v97 = txn3.time;
      const v91 = txn3.from;
      const v93 = stdlib.eq(v92, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v93, {
        at: './index.rsh:50:33:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      const v94 = stdlib.addressEq(v4, v91);
      stdlib.assert(v94, {
        at: './index.rsh:50:33:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      const v96 = stdlib.add(v100, v92);
      const cv11 = v11;
      const cv100 = v96;
      const cv101 = v97;
      const cv102 = v101;
      
      v11 = cv11;
      v100 = cv100;
      v101 = cv101;
      v102 = cv102;
      
      continue;
       }
    else {
      const [v58] = txn2.data;
      const v59 = txn2.value;
      const v71 = txn2.time;
      const v57 = txn2.from;
      let v60;
      switch (v58[0]) {
        case 'Creator': {
          
          v60 = stdlib.checkedBigNumberify('./index.rsh:29:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v64 = v58[1];
          v60 = v5;
          
          break;
           }
         }
      const v68 = stdlib.eq(v59, v60);
      stdlib.assert(v68, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Creator'
         });
      stdlib.assert(true, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
         });
      const v70 = stdlib.add(v100, v59);
      let v72;
      switch (v58[0]) {
        case 'Creator': {
          
          const v74 = stdlib.eq(v57, v4);
          v72 = v74;
          
          break;
           }
        case 'Player': {
          const v77 = v58[1];
          v72 = true;
          
          break;
           }
         }
      stdlib.assert(v72, {
        at: './index.rsh:28:21:application',
        fs: [],
        msg: null,
        who: 'Creator'
         });
      switch (v58[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv100 = v70;
          const cv101 = v71;
          const cv102 = v101;
          
          v11 = cv11;
          v100 = cv100;
          v101 = cv101;
          v102 = cv102;
          
          continue;
          break;
           }
        case 'Player': {
          const v82 = v58[1];
          ;
          const v90 = stdlib.sub(v70, v5);
          const cv11 = v11;
          const cv100 = v90;
          const cv101 = v71;
          const cv102 = v101;
          
          v11 = cv11;
          v100 = cv100;
          v101 = cv101;
          v102 = cv102;
          
          continue;
          break;
           }
         } }
     }
  return;
  
   }
export async function Player(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    Creator: ctc1,
    Player: ctc0
     });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc4, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc4, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  
  
  const v1 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Player', 1, 1, [ctc0], false, false));
  const [v5] = txn1.data;
  const v6 = txn1.value;
  const v10 = txn1.time;
  const v4 = txn1.from;
  const v7 = stdlib.eq(v6, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v7, {
    at: './index.rsh:21:21:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Player'
     });
  stdlib.assert(true, {
    at: './index.rsh:21:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
     });
  const v9 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v6);
  let v11 = true;
  let v100 = v9;
  let v101 = v10;
  let v102 = v1;
  
  while ((() => {
    
    return v11; })()) {
    const v39 = stdlib.protect(ctc0, await interact.getMove(), {
      at: './index.rsh:37:64:application',
      fs: ['at ./index.rsh:28:21:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)', 'at ./index.rsh:28:21:application call to [unknown function] (defined at: ./index.rsh:28:21:function exp)'],
      msg: 'getMove',
      who: 'Player'
       });
    const v41 = stdlib.eq(v39, stdlib.checkedBigNumberify('./index.rsh:38:45:decimal', stdlib.UInt_max, 0));
    const v43 = v41 ? false : true;
    const v52 = ['Player', v39];
    const txn2 = await (ctc.sendrecv('Player', 3, 1, stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc4, ctc0, ctc0, ctc2], [v4, v5, v11, v100, v101, v52], v5, [ctc2], v43, false, stdlib.checkedBigNumberify('./index.rsh:49:30:decimal', stdlib.UInt_max, 1024), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, 2), v4, v5, v11, v100]);
      const [v58] = txn2.data;
      const v59 = txn2.value;
      const v71 = txn2.time;
      const v57 = txn2.from;
      
      let v60;
      switch (v58[0]) {
        case 'Creator': {
          
          v60 = stdlib.checkedBigNumberify('./index.rsh:29:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v64 = v58[1];
          v60 = v5;
          
          break;
           }
         }
      const v68 = stdlib.eq(v59, v60);
      stdlib.assert(v68, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const v70 = stdlib.add(v100, v59);
      let v72;
      switch (v58[0]) {
        case 'Creator': {
          
          const v74 = stdlib.eq(v57, v4);
          v72 = v74;
          
          break;
           }
        case 'Player': {
          const v77 = v58[1];
          v72 = true;
          
          break;
           }
         }
      stdlib.assert(v72, {
        at: './index.rsh:28:21:application',
        fs: [],
        msg: null,
        who: 'Player'
         });
      switch (v58[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv100 = v70;
          const cv101 = v71;
          const cv102 = v101;
          
          (() => {
            const v11 = cv11;
            const v100 = cv100;
            const v101 = cv101;
            const v102 = cv102;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
               } })();
          break;
           }
        case 'Player': {
          const v82 = v58[1];
          sim_r.txns.push({
            amt: v5,
            to: v4
             });
          const v90 = stdlib.sub(v70, v5);
          const cv11 = v11;
          const cv100 = v90;
          const cv101 = v71;
          const cv102 = v101;
          
          (() => {
            const v11 = cv11;
            const v100 = cv100;
            const v101 = cv101;
            const v102 = cv102;
            
            if ((() => {
              
              return v11; })()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100, v101]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:26:25:after expr stmt semicolon', stdlib.UInt_max, 2), v4, v5, v11, v100]);
              sim_r.isHalt = false;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
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
      const v92 = txn3.value;
      const v97 = txn3.time;
      const v91 = txn3.from;
      const v93 = stdlib.eq(v92, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v93, {
        at: './index.rsh:50:33:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      const v94 = stdlib.addressEq(v4, v91);
      stdlib.assert(v94, {
        at: './index.rsh:50:33:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const v96 = stdlib.add(v100, v92);
      const cv11 = v11;
      const cv100 = v96;
      const cv101 = v97;
      const cv102 = v101;
      
      v11 = cv11;
      v100 = cv100;
      v101 = cv101;
      v102 = cv102;
      
      continue;
       }
    else {
      const [v58] = txn2.data;
      const v59 = txn2.value;
      const v71 = txn2.time;
      const v57 = txn2.from;
      let v60;
      switch (v58[0]) {
        case 'Creator': {
          
          v60 = stdlib.checkedBigNumberify('./index.rsh:29:26:decimal', stdlib.UInt_max, 0);
          
          break;
           }
        case 'Player': {
          const v64 = v58[1];
          v60 = v5;
          
          break;
           }
         }
      const v68 = stdlib.eq(v59, v60);
      stdlib.assert(v68, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:28:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player'
         });
      const v70 = stdlib.add(v100, v59);
      let v72;
      switch (v58[0]) {
        case 'Creator': {
          
          const v74 = stdlib.eq(v57, v4);
          v72 = v74;
          
          break;
           }
        case 'Player': {
          const v77 = v58[1];
          v72 = true;
          
          break;
           }
         }
      stdlib.assert(v72, {
        at: './index.rsh:28:21:application',
        fs: [],
        msg: null,
        who: 'Player'
         });
      switch (v58[0]) {
        case 'Creator': {
          
          const cv11 = false;
          const cv100 = v70;
          const cv101 = v71;
          const cv102 = v101;
          
          v11 = cv11;
          v100 = cv100;
          v101 = cv101;
          v102 = cv102;
          
          continue;
          break;
           }
        case 'Player': {
          const v82 = v58[1];
          stdlib.protect(ctc1, await interact.seeMove(v82), {
            at: './index.rsh:44:49:application',
            fs: ['at ./index.rsh:43:40:application call to [unknown function] (defined at: ./index.rsh:43:44:function exp)'],
            msg: 'seeMove',
            who: 'Player'
             });
          
          ;
          const v90 = stdlib.sub(v70, v5);
          const cv11 = v11;
          const cv100 = v90;
          const cv101 = v71;
          const cv102 = v101;
          
          v11 = cv11;
          v100 = cv100;
          v101 = cv101;
          v102 = cv102;
          
          continue;
          
          break;
           }
         } }
     }
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
  stepargs: [0, 89, 0, 139, 130],
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
// "./index.rsh:21:21:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:21:21:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
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
load 255
itob
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
int 10
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
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
gtxna 0 ApplicationArgs 9
byteget 0
int 0
==
bz l1
int 0
store 253
l1:
gtxna 0 ApplicationArgs 9
byteget 0
int 1
==
bz l2
gtxna 0 ApplicationArgs 9
substring 1 9
btoi
store 252
gtxna 0 ApplicationArgs 6
btoi
store 253
l2:
l0:
// Just "pay amount correct"
// "./index.rsh:28:21:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
load 253
==
assert
// Just "sender correct"
// "./index.rsh:28:21:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 8
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 252
gtxna 0 ApplicationArgs 9
byteget 0
int 0
==
bz l4
gtxn 3 Sender
gtxna 0 ApplicationArgs 5
==
store 251
l4:
gtxna 0 ApplicationArgs 9
byteget 0
int 1
==
bz l5
gtxna 0 ApplicationArgs 9
substring 1 9
btoi
store 250
int 1
store 251
l5:
l3:
// Nothing
// "./index.rsh:28:21:application"
// "[]"
load 251
assert
gtxna 0 ApplicationArgs 9
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
l7:
gtxna 0 ApplicationArgs 9
byteget 0
int 1
==
bz l8
gtxna 0 ApplicationArgs 9
substring 1 9
btoi
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
gtxna 0 ApplicationArgs 6
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 252
gtxna 0 ApplicationArgs 6
btoi
-
store 249
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
load 249
itob
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
l9:
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
l8:
l6:
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
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:50:33:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:50:33:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 8
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
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
load 255
itob
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
            "internalType": "struct ReachContract.a0postsvs",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum ReachContract._enum_T0",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Creator",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Player",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T0",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct ReachContract.a3msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a3",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v101",
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
            "internalType": "struct ReachContract.a0postsvs",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum ReachContract._enum_T0",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Creator",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Player",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReachContract.T0",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct ReachContract.a3msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a3",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v101",
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
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b610a55806100ab6000396000f3fe6080604052600436106100345760003560e01c806374c3ea97146100395780639532ef011461004e5780639ae1658014610061575b600080fd5b61004c61004736600461088a565b610074565b005b61004c61005c366004610861565b6101be565b61004c61006f366004610878565b610291565b60405161008890600290839060200161097c565b6040516020818303038152906040528051906020012060001c600054146100ae57600080fd5b6100be61040060808301356109da565b43101580156100cb575060015b6100d457600080fd5b34156100df57600080fd5b336100ed602083018361080c565b6001600160a01b03161461010057600080fd5b7fa97854d160f65204bbfc610caf2193e67ff1ee745985990a991012abb31a5bc78160405161012f9190610959565b60405180910390a161013f6106f9565b61014c602083018361080c565b81516001600160a01b0390911690528051602080840135910152610176606083016040840161082d565b6020820151901515905261018e3460608401356109da565b60208083018051909101919091528051436040909101525160808301356060909101526101ba8161066c565b5050565b6040516101d290600090839060200161096d565b6040516020818303038152906040528051906020012060001c600054146101f857600080fd5b341561020357600080fd5b7ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc1668160405161023291906108e1565b60405180910390a16102426106f9565b8051339052805160208084013591810191909152810151600190526102683460006109da565b60208083018051909101919091528051436040909101525182356060909101526101ba8161066c565b6040516102a590600290839060200161097c565b6040516020818303038152906040528051906020012060001c600054146102cb57600080fd5b6102d361071e565b6102e361040060808401356109da565b43106102ee57600080fd5b600061030060c0840160a08501610847565b600181111561031f57634e487b7160e01b600052602160045260246000fd5b141561032e5760008152610379565b600161034060c0840160a08501610847565b600181111561035f57634e487b7160e01b600052602160045260246000fd5b14156103795760e082013560208083019190915282013581525b8051341461038657600080fd5b6103943460608401356109da565b604082015260006103ab60c0840160a08501610847565b60018111156103ca57634e487b7160e01b600052602160045260246000fd5b14156103f2576103dd602083018361080c565b6001600160a01b03163314606082015261043b565b600161040460c0840160a08501610847565b600181111561042357634e487b7160e01b600052602160045260246000fd5b141561043b5760e08201356080820152600160608201525b806060015161044957600080fd5b600061045b60c0840160a08501610847565b600181111561047a57634e487b7160e01b600052602160045260246000fd5b1415610526577f0c1ee23ca16559451cd56f5d6c5a86d738a7193bf937fdb12fcd4392e090266f826040516104af91906108f8565b60405180910390a16104bf6106f9565b6104cc602084018461080c565b81516001600160a01b0390911690528051602080850135918101919091528082018051600090526040808501518251909301929092528051439201919091525160808401356060909101526105208161066c565b506101ba565b600161053860c0840160a08501610847565b600181111561055757634e487b7160e01b600052602160045260246000fd5b14156101ba5760e082013560a0820152610574602083018361080c565b6040516001600160a01b039190911690602084013580156108fc02916000818181858888f193505050501580156105af573d6000803e3d6000fd5b507f0c1ee23ca16559451cd56f5d6c5a86d738a7193bf937fdb12fcd4392e090266f826040516105df91906108f8565b60405180910390a16105ef6106f9565b6105fc602084018461080c565b81516001600160a01b0390911690528051602080850135910152610626606084016040850161082d565b602080830151911515909152604083015161064491850135906109f2565b6020808301805190910191909152805143604090910152516080840135606090910152610520815b602081015151156106ef5761067f610756565b8151516001600160a01b0316815281516020908101518183015280830180515115156040808501919091528151830151606085015290518101516080840152516106ce91600291849101610990565b60408051601f198184030181529190528051602090910120600055506106f6565b6000805533ff5b50565b604051806040016040528061070c610790565b81526020016107196107a7565b905290565b6040518060c0016040528060008152602001600081526020016000815260200160001515815260200160008152602001600081525090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160001515815260200160008152602001600081525090565b604080518082019091526000808252602082015290565b60405180608001604052806000151581526020016000815260200160008152602001600081525090565b80356001600160a01b03811681146107e857600080fd5b919050565b803580151581146107e857600080fd5b8035600281106107e857600080fd5b60006020828403121561081d578081fd5b610826826107d1565b9392505050565b60006020828403121561083e578081fd5b610826826107ed565b600060208284031215610858578081fd5b610826826107fd565b600060408284031215610872578081fd5b50919050565b60006101008284031215610872578081fd5b600060a08284031215610872578081fd5b6001600160a01b036108ac826107d1565b168252602081013560208301526108c5604082016107ed565b1515604083015260608181013590830152608090810135910152565b813581526020918201359181019190915260400190565b6101008101610907828461089b565b61091360a084016107fd565b6002811061093157634e487b7160e01b600052602160045260246000fd5b60a083015261094260c084016107ed565b151560c083015260e083013560e083015292915050565b60a08101610967828461089b565b92915050565b91825235602082015260400190565b82815260c08101610826602083018461089b565b91825280516001600160a01b03166020808401919091528101516040808401919091528101511515606080840191909152810151608080840191909152015160a082015260c00190565b600082198211156109ed576109ed610a09565b500190565b600082821015610a0457610a04610a09565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d3d166620878ff22798cb27dc4d194085072ba299e59fcaa525154cee55c789964736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

