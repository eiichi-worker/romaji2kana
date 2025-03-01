/**
 * ローマ字表記からひらがなへのコンバート（雑）
 *
 * @param {*} string ローマ字表記の文字列
 * @returns ひらがなの文字列
 * @url https://github.com/cloneko/kana2romaji
 */
function romaji2kana(string) {
  if (!string) {
    return "";
  }

  let value = string.toLowerCase() || "";

  const romajiKanaTable = [
    {
      cchi: "っち",
      xtsu: "っ",
    },
    {
      bba: "っば",
      bbe: "っべ",
      bbi: "っび",
      bbo: "っぼ",
      bbu: "っぶ",
      byo: "びょ",
      byu: "びゅ",
      cha: "ちゃ",
      chi: "ち",
      cho: "ちょ",
      chu: "ちゅ",
      dda: "っだ",
      dde: "っで",
      ddi: "っぢ",
      ddo: "っど",
      ddu: "っづ",
      dha: "でゃ",
      dho: "でょ",
      dhu: "でゅ",
      dya: "ぢゃ",
      dyo: "ぢょ",
      dyu: "ぢゅ",
      ffu: "っふ",
      gga: "っが",
      gge: "っげ",
      ggi: "っぎ",
      ggo: "っご",
      ggu: "っぐ",
      gya: "ぎゃ",
      gyo: "ぎょ",
      gyu: "ぎゅ",
      hha: "っは",
      hhe: "っへ",
      hhi: "っひ",
      hho: "っほ",
      hya: "ひゃ",
      hyo: "ひょ",
      hyu: "ひゅ",
      jji: "っじ",
      kka: "っか",
      kke: "っけ",
      kki: "っき",
      kko: "っこ",
      kku: "っく",
      kya: "きゃ",
      kyo: "きょ",
      kyu: "きゅ",
      mma: "っま",
      mme: "っめ",
      mmi: "っみ",
      mmo: "っも",
      mmu: "っむ",
      mya: "みゃ",
      myo: "みょ",
      myu: "みゅ",
      nna: "っな",
      nne: "っね",
      nni: "っに",
      nno: "っの",
      nnu: "っぬ",
      nya: "にゃ",
      nyo: "にょ",
      nyu: "にゅ",
      ppa: "っぱ",
      ppe: "っぺ",
      ppi: "っぴ",
      ppo: "っぽ",
      ppu: "っぷ",
      pya: "びゃ",
      rra: "っら",
      rre: "っれ",
      rri: "っり",
      rro: "っろ",
      rru: "っる",
      rya: "りゃ",
      ryo: "りょ",
      ryu: "りゅ",
      sha: "しゃ",
      shi: "し",
      sho: "しょ",
      shu: "しゅ",
      ssa: "っさ",
      sse: "っせ",
      sshi: "っし",
      sso: "っそ",
      ssu: "っす",
      tee: "てぇ",
      tha: "てぁ",
      thi: "てぃ",
      tsu: "つ",
      tta: "った",
      tte: "って",
      tto: "っと",
      ttu: "っつ",
      wwa: "っわ",
      xya: "ゃ",
      xyo: "ょ",
      xyu: "ゅ",
      yya: "っや",
      yyo: "っよ",
      yyu: "っゆ",
      zza: "っざ",
      zze: "っぜ",
      zzo: "っぞ",
      zzu: "っず",
    },
    {
      aa: "ああ",
      ab: "あｂ",
      ac: "あｃ",
      ad: "あｄ",
      ae: "あえ",
      af: "あｆ",
      ag: "あｇ",
      ah: "あｈ",
      ai: "あい",
      aj: "あｊ",
      ak: "あｋ",
      al: "あｌ",
      am: "あｍ",
      an: "あｎ",
      ao: "あお",
      ap: "あｐ",
      aq: "あｑ",
      ar: "あｒ",
      as: "あｓ",
      at: "あｔ",
      au: "あう",
      av: "あｖ",
      aw: "あｗ",
      ax: "あｘ",
      ay: "あｙ",
      az: "あｚ",
      ba: "ば",
      bb: "ｂｂ",
      bc: "ｂｃ",
      bd: "ｂｄ",
      be: "べ",
      bf: "ｂｆ",
      bg: "ｂｇ",
      bh: "ｂｈ",
      bi: "び",
      bj: "ｂｊ",
      bk: "ｂｋ",
      bl: "ｂｌ",
      bm: "ｂｍ",
      bn: "ｂｎ",
      bo: "ぼ",
      bp: "ｂｐ",
      bq: "ｂｑ",
      br: "ｂｒ",
      bs: "ｂｓ",
      bt: "ｂｔ",
      bu: "ぶ",
      bv: "ｂｖ",
      bw: "ｂｗ",
      bx: "ｂｘ",
      by: "ｂｙ",
      bz: "ｂｚ",
      ca: "ｃあ",
      cb: "ｃｂ",
      cc: "ｃｃ",
      cd: "ｃｄ",
      ce: "ｃえ",
      cf: "ｃｆ",
      cg: "ｃｇ",
      ch: "ｃｈ",
      ci: "ｃい",
      cj: "ｃｊ",
      ck: "ｃｋ",
      cl: "ｃｌ",
      cm: "ｃｍ",
      cn: "ｃｎ",
      co: "ｃお",
      cp: "ｃｐ",
      cq: "ｃｑ",
      cr: "ｃｒ",
      cs: "ｃｓ",
      ct: "ｃｔ",
      cu: "ｃう",
      cv: "ｃｖ",
      cw: "ｃｗ",
      cx: "ｃｘ",
      cy: "ｃｙ",
      cz: "ｃｚ",
      da: "だ",
      db: "ｄｂ",
      dc: "ｄｃ",
      dd: "ｄｄ",
      de: "で",
      df: "ｄｆ",
      dg: "ｄｇ",
      dh: "ｄｈ",
      di: "ぢ",
      dj: "ｄｊ",
      dk: "ｄｋ",
      dl: "ｄｌ",
      dm: "ｄｍ",
      dn: "ｄｎ",
      do: "ど",
      dp: "ｄｐ",
      dq: "ｄｑ",
      dr: "ｄｒ",
      ds: "ｄｓ",
      dt: "ｄｔ",
      du: "づ",
      dv: "ｄｖ",
      dw: "ｄｗ",
      dx: "ｄｘ",
      dy: "ｄｙ",
      dz: "ｄｚ",
      ea: "えあ",
      eb: "えｂ",
      ec: "えｃ",
      ed: "えｄ",
      ee: "ええ",
      ef: "えｆ",
      eg: "えｇ",
      eh: "えｈ",
      ei: "えい",
      ej: "えｊ",
      ek: "えｋ",
      el: "えｌ",
      em: "えｍ",
      en: "えｎ",
      eo: "えお",
      ep: "えｐ",
      eq: "えｑ",
      er: "えｒ",
      es: "えｓ",
      et: "えｔ",
      eu: "えう",
      ev: "えｖ",
      ew: "えｗ",
      ex: "えｘ",
      ey: "えｙ",
      ez: "えｚ",
      fa: "ふぁ",
      fb: "ｆｂ",
      fc: "ｆｃ",
      fd: "ｆｄ",
      fe: "ふぇ",
      ff: "ｆｆ",
      fg: "ｆｇ",
      fh: "ｆｈ",
      fi: "ふぃ",
      fj: "ｆｊ",
      fk: "ｆｋ",
      fl: "ｆｌ",
      fm: "ｆｍ",
      fn: "ｆｎ",
      fo: "ふぉ",
      fp: "ｆｐ",
      fq: "ｆｑ",
      fr: "ｆｒ",
      fs: "ｆｓ",
      ft: "ｆｔ",
      fu: "ふ",
      fv: "ｆｖ",
      fw: "ｆｗ",
      fx: "ｆｘ",
      fy: "ｆｙ",
      fz: "ｆｚ",
      ga: "が",
      gb: "ｇｂ",
      gc: "ｇｃ",
      gd: "ｇｄ",
      ge: "げ",
      gf: "ｇｆ",
      gg: "ｇｇ",
      gh: "ｇｈ",
      gi: "ぎ",
      gj: "ｇｊ",
      gk: "ｇｋ",
      gl: "ｇｌ",
      gm: "ｇｍ",
      gn: "ｇｎ",
      go: "ご",
      gp: "ｇｐ",
      gq: "ｇｑ",
      gr: "ｇｒ",
      gs: "ｇｓ",
      gt: "ｇｔ",
      gu: "ぐ",
      gv: "ｇｖ",
      gw: "ｇｗ",
      gx: "ｇｘ",
      gy: "ｇｙ",
      gz: "ｇｚ",
      ha: "は",
      hb: "ｈｂ",
      hc: "ｈｃ",
      hd: "ｈｄ",
      he: "へ",
      hf: "ｈｆ",
      hg: "ｈｇ",
      hh: "ｈｈ",
      hi: "ひ",
      hj: "ｈｊ",
      hk: "ｈｋ",
      hl: "ｈｌ",
      hm: "ｈｍ",
      hn: "ｈｎ",
      ho: "ほ",
      hp: "ｈｐ",
      hq: "ｈｑ",
      hr: "ｈｒ",
      hs: "ｈｓ",
      ht: "ｈｔ",
      hu: "ふ",
      hv: "ｈｖ",
      hw: "ｈｗ",
      hx: "ｈｘ",
      hy: "ｈｙ",
      hz: "ｈｚ",
      ia: "いあ",
      ib: "いｂ",
      ic: "いｃ",
      id: "いｄ",
      ie: "いえ",
      if: "いｆ",
      ig: "いｇ",
      ih: "いｈ",
      ii: "いい",
      ij: "いｊ",
      ik: "いｋ",
      il: "いｌ",
      im: "いｍ",
      in: "いｎ",
      io: "いお",
      ip: "いｐ",
      iq: "いｑ",
      ir: "いｒ",
      is: "いｓ",
      it: "いｔ",
      iu: "いう",
      iv: "いｖ",
      iw: "いｗ",
      ix: "いｘ",
      iy: "いｙ",
      iz: "いｚ",
      ja: "じゃ",
      jb: "ｊｂ",
      jc: "ｊｃ",
      jd: "ｊｄ",
      je: "じぇ",
      jf: "ｊｆ",
      jg: "ｊｇ",
      jh: "ｊｈ",
      ji: "じ",
      jj: "ｊｊ",
      jk: "ｊｋ",
      jl: "ｊｌ",
      jm: "ｊｍ",
      jn: "ｊｎ",
      jo: "じょ",
      jp: "ｊｐ",
      jq: "ｊｑ",
      jr: "ｊｒ",
      js: "ｊｓ",
      jt: "ｊｔ",
      ju: "じゅ",
      jv: "ｊｖ",
      jw: "ｊｗ",
      jx: "ｊｘ",
      jy: "ｊｙ",
      jz: "ｊｚ",
      ka: "か",
      kb: "ｋｂ",
      kc: "ｋｃ",
      kd: "ｋｄ",
      ke: "け",
      kf: "ｋｆ",
      kg: "ｋｇ",
      kh: "ｋｈ",
      ki: "き",
      kj: "ｋｊ",
      kk: "ｋｋ",
      kl: "ｋｌ",
      km: "ｋｍ",
      kn: "ｋｎ",
      ko: "こ",
      kp: "ｋｐ",
      kq: "ｋｑ",
      kr: "ｋｒ",
      ks: "ｋｓ",
      kt: "ｋｔ",
      ku: "く",
      kv: "ｋｖ",
      kw: "ｋｗ",
      kx: "ｋｘ",
      ky: "ｋｙ",
      kz: "ｋｚ",
      la: "ぁ",
      lb: "ｌｂ",
      lc: "ｌｃ",
      ld: "ｌｄ",
      le: "ぇ",
      lf: "ｌｆ",
      lg: "ｌｇ",
      lh: "ｌｈ",
      li: "ぃ",
      lj: "ｌｊ",
      lk: "ｌｋ",
      ll: "ｌｌ",
      lm: "ｌｍ",
      ln: "ｌｎ",
      lo: "ぉ",
      lp: "ｌｐ",
      lq: "ｌｑ",
      lr: "ｌｒ",
      ls: "ｌｓ",
      lt: "ｌｔ",
      lu: "ｌう",
      lv: "ｌｖ",
      lw: "ｌｗ",
      lx: "ｌｘ",
      ly: "ｌｙ",
      lz: "ｌｚ",
      ma: "ま",
      mb: "ｍｂ",
      mc: "ｍｃ",
      md: "ｍｄ",
      me: "め",
      mf: "ｍｆ",
      mg: "ｍｇ",
      mh: "ｍｈ",
      mi: "み",
      mj: "ｍｊ",
      mk: "ｍｋ",
      ml: "ｍｌ",
      mm: "ｍｍ",
      mn: "ｍｎ",
      mo: "も",
      mp: "ｍｐ",
      mq: "ｍｑ",
      mr: "ｍｒ",
      ms: "ｍｓ",
      mt: "ｍｔ",
      mu: "む",
      mv: "ｍｖ",
      mw: "ｍｗ",
      mx: "ｍｘ",
      my: "ｍｙ",
      mz: "ｍｚ",
      na: "な",
      nb: "ｎｂ",
      nc: "ｎｃ",
      nd: "ｎｄ",
      ne: "ね",
      nf: "ｎｆ",
      ng: "ｎｇ",
      nh: "ｎｈ",
      ni: "に",
      nj: "ｎｊ",
      nk: "ｎｋ",
      nl: "ｎｌ",
      nm: "ｎｍ",
      nn: "ｎｎ",
      nn: "ん",
      no: "の",
      np: "ｎｐ",
      nq: "ｎｑ",
      nr: "ｎｒ",
      ns: "ｎｓ",
      nt: "ｎｔ",
      nu: "ぬ",
      nv: "ｎｖ",
      nw: "ｎｗ",
      nx: "ｎｘ",
      ny: "ｎｙ",
      nz: "ｎｚ",
      oa: "おあ",
      ob: "おｂ",
      oc: "おｃ",
      od: "おｄ",
      oe: "おえ",
      of: "おｆ",
      og: "おｇ",
      oh: "おｈ",
      oi: "おい",
      oj: "おｊ",
      ok: "おｋ",
      ol: "おｌ",
      om: "おｍ",
      on: "おｎ",
      oo: "おお",
      op: "おｐ",
      oq: "おｑ",
      or: "おｒ",
      os: "おｓ",
      ot: "おｔ",
      ou: "おう",
      ov: "おｖ",
      ow: "おｗ",
      ox: "おｘ",
      oy: "おｙ",
      oz: "おｚ",
      pa: "ぱ",
      pb: "ｐｂ",
      pc: "ｐｃ",
      pd: "ｐｄ",
      pe: "ぺ",
      pf: "ｐｆ",
      pg: "ｐｇ",
      ph: "ｐｈ",
      pi: "ぴ",
      pj: "ｐｊ",
      pk: "ｐｋ",
      pl: "ｐｌ",
      pm: "ｐｍ",
      pn: "ｐｎ",
      po: "ぽ",
      pp: "ｐｐ",
      pq: "ｐｑ",
      pr: "ｐｒ",
      ps: "ｐｓ",
      pt: "ｐｔ",
      pu: "ぷ",
      pv: "ｐｖ",
      pw: "ｐｗ",
      px: "ｐｘ",
      py: "ｐｙ",
      pz: "ｐｚ",
      qa: "くぁ",
      qb: "ｑｂ",
      qc: "ｑｃ",
      qd: "ｑｄ",
      qe: "くぇ",
      qf: "ｑｆ",
      qg: "ｑｇ",
      qh: "ｑｈ",
      qi: "くぃ",
      qj: "ｑｊ",
      qk: "ｑｋ",
      ql: "ｑｌ",
      qm: "ｑｍ",
      qn: "ｑｎ",
      qo: "くぉ",
      qp: "ｑｐ",
      qq: "ｑｑ",
      qr: "ｑｒ",
      qs: "ｑｓ",
      qt: "ｑｔ",
      qu: "く",
      qv: "ｑｖ",
      qw: "ｑｗ",
      qx: "ｑｘ",
      qy: "ｑｙ",
      qz: "ｑｚ",
      ra: "ら",
      rb: "ｒｂ",
      rc: "ｒｃ",
      rd: "ｒｄ",
      re: "れ",
      rf: "ｒｆ",
      rg: "ｒｇ",
      rh: "ｒｈ",
      ri: "り",
      rj: "ｒｊ",
      rk: "ｒｋ",
      rl: "ｒｌ",
      rm: "ｒｍ",
      rn: "ｒｎ",
      ro: "ろ",
      rp: "ｒｐ",
      rq: "ｒｑ",
      rr: "ｒｒ",
      rs: "ｒｓ",
      rt: "ｒｔ",
      ru: "る",
      rv: "ｒｖ",
      rw: "ｒｗ",
      rx: "ｒｘ",
      ry: "ｒｙ",
      rz: "ｒｚ",
      sa: "さ",
      sb: "ｓｂ",
      sc: "ｓｃ",
      sd: "ｓｄ",
      se: "せ",
      sf: "ｓｆ",
      sg: "ｓｇ",
      sh: "ｓｈ",
      si: "し",
      sj: "ｓｊ",
      sk: "ｓｋ",
      sl: "ｓｌ",
      sm: "ｓｍ",
      sn: "ｓｎ",
      so: "そ",
      sp: "ｓｐ",
      sq: "ｓｑ",
      sr: "ｓｒ",
      ss: "ｓｓ",
      st: "ｓｔ",
      su: "す",
      sv: "ｓｖ",
      sw: "ｓｗ",
      sx: "ｓｘ",
      sy: "ｓｙ",
      sz: "ｓｚ",
      ta: "た",
      tb: "ｔｂ",
      tc: "ｔｃ",
      td: "ｔｄ",
      te: "て",
      tf: "ｔｆ",
      tg: "ｔｇ",
      th: "ｔｈ",
      ti: "ち",
      tj: "ｔｊ",
      tk: "ｔｋ",
      tl: "ｔｌ",
      tm: "ｔｍ",
      tn: "ｔｎ",
      to: "と",
      tp: "ｔｐ",
      tq: "ｔｑ",
      tr: "ｔｒ",
      ts: "ｔｓ",
      tt: "ｔｔ",
      tu: "つ",
      tv: "ｔｖ",
      tw: "ｔｗ",
      tx: "ｔｘ",
      ty: "ｔｙ",
      tz: "ｔｚ",
      ua: "うあ",
      ub: "うｂ",
      uc: "うｃ",
      ud: "うｄ",
      ue: "うえ",
      uf: "うｆ",
      ug: "うｇ",
      uh: "うｈ",
      ui: "うい",
      uj: "うｊ",
      uk: "うｋ",
      ul: "うｌ",
      um: "うｍ",
      un: "うｎ",
      uo: "うお",
      up: "うｐ",
      uq: "うｑ",
      ur: "うｒ",
      us: "うｓ",
      ut: "うｔ",
      uu: "うう",
      uv: "うｖ",
      uw: "うｗ",
      ux: "うｘ",
      uy: "うｙ",
      uz: "うｚ",
      va: "う゛ぁ",
      vb: "ｖｂ",
      vc: "ｖｃ",
      vd: "ｖｄ",
      ve: "う゛ぇ",
      vf: "ｖｆ",
      vg: "ｖｇ",
      vh: "ｖｈ",
      vi: "う゛ぃ",
      vj: "ｖｊ",
      vk: "ｖｋ",
      vl: "ｖｌ",
      vm: "ｖｍ",
      vn: "ｖｎ",
      vo: "う゛ぉ",
      vp: "ｖｐ",
      vq: "ｖｑ",
      vr: "ｖｒ",
      vs: "ｖｓ",
      vt: "ｖｔ",
      vu: "ヴ",
      vv: "ｖｖ",
      vw: "ｖｗ",
      vx: "ｖｘ",
      vy: "ｖｙ",
      vz: "ｖｚ",
      wa: "わ",
      wb: "ｗｂ",
      wc: "ｗｃ",
      wd: "ｗｄ",
      we: "うぇ",
      wf: "ｗｆ",
      wg: "ｗｇ",
      wh: "ｗｈ",
      wi: "うぃ",
      wj: "ｗｊ",
      wk: "ｗｋ",
      wl: "ｗｌ",
      wm: "ｗｍ",
      wn: "ｗｎ",
      wo: "を",
      wp: "ｗｐ",
      wq: "ｗｑ",
      wr: "ｗｒ",
      ws: "ｗｓ",
      wt: "ｗｔ",
      wu: "う",
      wv: "ｗｖ",
      ww: "ｗｗ",
      wx: "ｗｘ",
      wy: "ｗｙ",
      wz: "ｗｚ",
      xa: "ぁ",
      xb: "ｘｂ",
      xc: "ｘｃ",
      xd: "ｘｄ",
      xe: "ぇ",
      xf: "ｘｆ",
      xg: "ｘｇ",
      xh: "ｘｈ",
      xi: "ぃ",
      xj: "ｘｊ",
      xk: "ｘｋ",
      xl: "ｘｌ",
      xm: "ｘｍ",
      xn: "ｘｎ",
      xo: "ぉ",
      xp: "ｘｐ",
      xq: "ｘｑ",
      xr: "ｘｒ",
      xs: "ｘｓ",
      xt: "ｘｔ",
      xu: "ぅ",
      xv: "ｘｖ",
      xw: "ｘｗ",
      xx: "ｘｘ",
      xy: "ｘｙ",
      xz: "ｘｚ",
      ya: "や",
      yb: "ｙｂ",
      yc: "ｙｃ",
      yd: "ｙｄ",
      ye: "いぇ",
      yf: "ｙｆ",
      yg: "ｙｇ",
      yh: "ｙｈ",
      yi: "い",
      yj: "ｙｊ",
      yk: "ｙｋ",
      yl: "ｙｌ",
      ym: "ｙｍ",
      yn: "ｙｎ",
      yo: "よ",
      yp: "ｙｐ",
      yq: "ｙｑ",
      yr: "ｙｒ",
      ys: "ｙｓ",
      yt: "ｙｔ",
      yu: "ゆ",
      yv: "ｙｖ",
      yw: "ｙｗ",
      yx: "ｙｘ",
      yy: "ｙｙ",
      yz: "ｙｚ",
      za: "ざ",
      zb: "ｚｂ",
      zc: "ｚｃ",
      zd: "ｚｄ",
      ze: "ぜ",
      zf: "ｚｆ",
      zg: "ｚｇ",
      zh: "ｚｈ",
      zi: "じ",
      zj: "ｚｊ",
      zk: "ｚｋ",
      zl: "ｚｌ",
      zm: "ｚｍ",
      zn: "ｚｎ",
      zo: "ぞ",
      zp: "ｚｐ",
      zq: "ｚｑ",
      zr: "ｚｒ",
      zs: "ｚｓ",
      zt: "ｚｔ",
      zu: "ず",
      zv: "ｚｖ",
      zw: "ｚｗ",
      zx: "ｚｘ",
      zy: "ｚｙ",
      zz: "ｚｚ",
    },
    {
      a: "あ",
      b: "ｂ",
      c: "ｃ",
      d: "ｄ",
      e: "え",
      f: "ｆ",
      g: "ｇ",
      h: "ｈ",
      i: "い",
      j: "ｊ",
      k: "ｋ",
      l: "ｌ",
      m: "ｍ",
      n: "ん",
      o: "お",
      p: "ｐ",
      q: "ｑ",
      r: "ｒ",
      s: "ｓ",
      t: "ｔ",
      u: "う",
      v: "ｖ",
      w: "ｗ",
      x: "ｘ",
      y: "ｙ",
      z: "ｚ",
    },
    {
      "-": "ー",
      ",": "、",
      ".": "。",
    },
  ];

  let res = "";
  while (0 < value.length) {
    let isReplace = false;
    romajiKanaTable.some((list) => {
      Object.keys(list).some((romaji) => {
        if (value.startsWith(romaji)) {
          value = value.replace(romaji, "");
          res += list[romaji];
          return (isReplace = true);
        }
      });
      return isReplace;
    });

    if (!isReplace) {
      res += value.substr(0, 1);
      value = value.substr(1);
    }
  }

  return res;
}
