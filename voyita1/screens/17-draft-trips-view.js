(function () {
  var TM = window.TM;
  var F = TM.F, HF = TM.HF, TG = TM.TG, CK = TM.CK, RD = TM.RD, H = TM.H, M = TM.M, TX = TM.TX, LBL = TM.LBL, HD = TM.HD, MU = TM.MU, ST = TM.ST, BR = TM.BR, BT = TM.BT, LK = TM.LK, CH = TM.CH, NT = TM.NT, SG = TM.SG, SB = TM.SB, EM = TM.EM, KV = TM.KV, UP = TM.UP, C = TM.C, G = TM.G, B = TM.B, KVG = TM.KVG, ROW = TM.ROW, MROW = TM.MROW, SHEET = TM.SHEET, DLG = TM.DLG, P = TM.P, LIKE = TM.LIKE, COVER = TM.COVER, PDF = TM.PDF, TRIP = TM.TRIP, CODE = TM.CODE, DV = TM.DV, TRIPSUB = TM.TRIPSUB, S = TM.S, CANCEL = TM.CANCEL, NAV = TM.NAV, TABS = TM.TABS, TC = TM.TC, MD = TM.MD, tripsOn = TM.tripsOn, staffIn = TM.staffIn, onTrip = TM.onTrip, personCal = TM.personCal, personScreen = TM.personScreen, tmTo = TM.tmTo, UFORM = TM.UFORM, TPICK = TM.TPICK, REC = TM.REC, SR = TM.SR, TR = TM.TR, TSEG = TM.TSEG, ACT = TM.ACT, DRF = TM.DRF, ONG = TM.ONG, R_A = TM.R_A, CT = TM.CT, CAL_MEET = TM.CAL_MEET, CAL_TRIPS = TM.CAL_TRIPS, CSEG = TM.CSEG, AVC = TM.AVC, AVL = TM.AVL, STAFF = TM.STAFF, CAL_STAFF = TM.CAL_STAFF, GUY = TM.GUY, GPH = TM.GPH, GSEG = TM.GSEG, SNAV = TM.SNAV, WROW = TM.WROW, NOTE = TM.NOTE, HERO_D = TM.HERO_D, HERO_A = TM.HERO_A, SEATS = TM.SEATS, WIDGETS = TM.WIDGETS, READY = TM.READY, HDR_D = TM.HDR_D, MEET = TM.MEET, WELCOME = TM.WELCOME, CAP = TM.CAP, CPICK = TM.CPICK, CONTACT = TM.CONTACT, BASIC_FORM = TM.BASIC_FORM, PL = TM.PL, DESC = TM.DESC, EV = TM.EV, DAY = TM.DAY, PLACES = TM.PLACES, MEDIA = TM.MEDIA, BASEF = TM.BASEF, ATT = TM.ATT, GEN = TM.GEN, ADDGEN = TM.ADDGEN, LODGE = TM.LODGE, CARS = TM.CARS, LEG = TM.LEG, TRANSIT = TM.TRANSIT, ADDT = TM.ADDT, EDT = TM.EDT, FAIR = TM.FAIR, FDEP = TM.FDEP, FARR = TM.FARR, FTAIL = TM.FTAIL, TRAINF = TM.TRAINF, BUSF = TM.BUSF, CRUISEF = TM.CRUISEF, VER = TM.VER, LONG = TM.LONG, BF = TM.BF, ADDR = TM.ADDR, EVFOOT = TM.EVFOOT, AUTOSAVE = TM.AUTOSAVE, ES = TM.ES, OPC = TM.OPC, TNUM = TM.TNUM, FSUB = TM.FSUB, FBASE = TM.FBASE, FMODE = TM.FMODE, LIVE_OFF = TM.LIVE_OFF, LIVE_ON = TM.LIVE_ON, FFOOT = TM.FFOOT, TOURF = TM.TOURF, ROEV = TM.ROEV, TYPEV = TM.TYPEV, PLANV = TM.PLANV, TIER = TM.TIER, ACCV = TM.ACCV, VO = TM.VO, COLLV = TM.COLLV, PLANROWS = TM.PLANROWS, FLAGS = TM.FLAGS, TIERNOTE = TM.TIERNOTE, ADDON = TM.ADDON, VARC = TM.VARC, AFORM = TM.AFORM, V2 = TM.V2, PERSON = TM.PERSON, TMROW = TM.TMROW, OSFORM = TM.OSFORM, SPK = TM.SPK, PICK = TM.PICK, TMFORM = TM.TMFORM, STOPTS = TM.STOPTS, TMS = TM.TMS, TMROWS = TM.TMROWS, BUL = TM.BUL, LIST = TM.LIST, DOC = TM.DOC, DOCS = TM.DOCS, TRAV = TM.TRAV, FL = TM.FL, PAYC = TM.PAYC, FSEC = TM.FSEC, TASK = TM.TASK, INSTR = TM.INSTR, BROW = TM.BROW, TFORM = TM.TFORM, MSEL = TM.MSEL, RFORM = TM.RFORM, PSROW = TM.PSROW, PAYROW = TM.PAYROW, TXN = TM.TXN, TNOTE = TM.TNOTE, TT = TM.TT, TSUM = TM.TSUM, TVSEG = TM.TVSEG, TSB = TM.TSB, ROWS_A = TM.ROWS_A, TDHEAD = TM.TDHEAD, RHEAD = TM.RHEAD, LROW = TM.LROW, LISTCARD = TM.LISTCARD, LISTROW = TM.LISTROW, OCC = TM.OCC, ROOM = TM.ROOM, CLIST = TM.CLIST, COACH = TM.COACH, RT = TM.RT, RCSEG = TM.RCSEG, RONLY = TM.RONLY, RSTATS = TM.RSTATS, RDL = TM.RDL, VROW = TM.VROW, STAT = TM.STAT, RESV = TM.RESV, VD = TM.VD, OD = TM.OD, VT = TM.VT, VONLY = TM.VONLY, VSEG = TM.VSEG, VHEAD = TM.VHEAD, NROW = TM.NROW, TOROW = TM.TOROW, NTT = TM.NTT, NSEG = TM.NSEG, NFAB = TM.NFAB, PK = TM.PK, PKV = TM.PKV, PKSEG = TM.PKSEG, PKT = TM.PKT, PKNOTE = TM.PKNOTE, H1 = TM.H1, AUTH = TM.AUTH, PFORM = TM.PFORM, PWF = TM.PWF, BRAND = TM.BRAND, LOGIN_LINKS = TM.LOGIN_LINKS, OTPSUB = TM.OTPSUB, RESEND = TM.RESEND, PNAV = TM.PNAV, PUPD = TM.PUPD, OTPOLD = TM.OTPOLD, OTPNEW = TM.OTPNEW, RESEND2 = TM.RESEND2;
  // ---------- draft trips: read-only copies of every screen reachable from a draft
  (function () {
    var EDITY = /(Edit|Add|Delete|Remove|Assign|Sheet|Confirm|Cancel|Upload|Compose|Discard|Request|Deactivate|NoteAdd|Recipients|DonationOff|Unsaved|Clash|Tier|Filter|Fundraising|_To$)/;
    var SRC = ['Trip_ViewDetails', 'Basic_View', 'Pay_View', 'Pay_View_Standard', 'Pay_View_Variable', 'Pay_View_Lump', 'Addon_List', 'Staff_View', 'Cost_View', 'Docs_List', 'Settings_View', 'Itin_View', 'Trav_List', 'Trav_Waiting', 'Trav_Request', 'Trav_Canceled', 'Trav_Deactivated', 'Trav_Detail', 'Trav_Payments', 'Trav_Notes', 'Trav_PaySchedule', 'Notif_Sent', 'Notif_Scheduled', 'Notif_Drafts', 'Notif_Detail', 'Rooms_Lists', 'Rooms_Detail', 'Rooms_Detail_Partial', 'Coach_Lists', 'Coach_Detail', 'Vend_List', 'Vend_Detail', 'Vend_Contacts', 'Vend_Docs', 'Vend_Payments', 'Vend_Other', 'Packet_View', 'Packet_Other'];
    SRC = SRC.filter(function (k) { return S[k]; });
    var MAP = {}; SRC.forEach(function (k) { MAP[k] = k + '_D'; });
    MAP.Trip_Details_Active = 'Trip_Details_Draft';
    function retarget(t) { if (!t || t === '^') return t; if (MAP[t]) return MAP[t]; if (/^(Trip_Details_Active|Trips_Active)$/.test(t)) return 'Trip_Details_Draft'; if (/^(Trip_Details_Draft|Trip_Details_Ready|Trips_Draft)$/.test(t)) return t; return null; }
    function clean(v) {
      if (Array.isArray(v)) return v.map(clean).filter(function (x) { return x !== undefined; });
      if (!v || typeof v !== 'object' || typeof v === 'function') return v;
      if (v.t === 'link' && (v.icon === 'plus' || (v.to && EDITY.test(v.to)))) return undefined;
      if (v.t === 'btns') return undefined;
      if (v.t === 'lrow' || v.t === 'cpick') return v;
      var o = {}; for (var k in v) o[k] = v[k];
      delete o.icons; delete o.rightLink; delete o.rightIcon; delete o.rightTo; delete o.rightToast; delete o.link; delete o.linkTo; delete o.linkIcon; delete o.linkToast;
      if (o.more) delete o.more;
      if (o.t === 'event') { o.more = null; }
      if (typeof o.to === 'string') { var r = retarget(o.to); if (r) o.to = r; else delete o.to; }
      for (var k2 in o) if (k2 !== 'to' && o[k2] && typeof o[k2] === 'object') o[k2] = clean(o[k2]);
      return o;
    }
    var NOTE = B([NT('Draft trip · view only. Make changes in the web app.', 'info', 'info')]);
    SRC.forEach(function (k) {
      var s = S[k], n = {}; for (var x in s) n[x] = s[x];
      delete n.fab; delete n.footer; delete n.fnote; delete n.ov; delete n.base;
      if (n.right && n.right.t !== 'chip' && n.right.t !== 'btn') delete n.right;
      n.blocks = [NOTE].concat(clean(s.blocks || []).filter(Boolean));
      if (n.tabs) n.tabs = n.tabs.map(function (t) { return [t[0], t[1], MAP[t[2]] || (t[2] === 'Trip_Details_Active' ? 'Trip_Details_Draft' : t[2]), t[3]]; });
      n.back = k === 'Trip_ViewDetails' ? 'Trip_Details_Draft' : n.tabs ? 'Trips_Draft' : (MAP[s.back] || 'Trip_Details_Draft');
      n.draftOf = k;
      P(MAP[k], n);
    });
    ['Trip_Details_Draft', 'Trip_Details_Ready'].forEach(function (k) {
      var s = S[k];
      if (s.tabs) s.tabs = s.tabs.map(function (t) { return [t[0], t[1], MAP[t[2]] || (t[2] === 'Trip_Details_Active' ? k : t[2]), t[3]]; });
      if (s.right && s.right.to === 'Trip_ViewDetails') s.right = Object.assign({}, s.right, { to: 'Trip_ViewDetails_D' });
      s.blocks = clean(s.blocks).filter(Boolean);
      s.blocks.forEach(function (b) { (b.items || []).forEach(function (it) { if (it.t === 'steps') it.items = it.items.map(function (x) { return [x[0], x[1], x[2] ? (MAP[x[2]] || null) : null]; }); }); });
    });
    var EMPTY = {
      Itin_View: ['route', 'Itinerary not set up yet', 'No events added yet. Build the itinerary in the web app.'],
      Pay_View: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Pay_View_Standard: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Pay_View_Variable: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Pay_View_Lump: ['dollar', 'Payment setup not set up yet', 'Collection type, pricing and payment plan are added in the web app.'],
      Vend_List: ['bldg', 'No vendors yet', 'Vendors and reservations are added in the web app.'],
      Addon_List: ['tag', 'No add-ons yet', 'Add-ons are created in the web app.'],
      Staff_View: ['staff', 'No staff assigned yet', 'Tour managers and other staff are assigned in the web app.'],
      Cost_View: ['receipt', 'Cost sheet not set up yet', 'The cost sheet is filled in the web app.'],
      Docs_List: ['folder', 'No documents yet', 'Documents uploaded in the web app show here.'],
      Trav_List: ['users', 'No travelers yet', 'Registration opens once the trip is confirmed.'],
      Trav_Waiting: ['users', 'No travelers yet', 'Registration opens once the trip is confirmed.'],
      Trav_Request: ['users', 'No requests yet', 'Cancellation requests appear after travelers register.'],
      Trav_Canceled: ['users', 'No canceled travelers', 'Registration opens once the trip is confirmed.'],
      Trav_Deactivated: ['users', 'No deactivated travelers', 'Registration opens once the trip is confirmed.'],
      Rooms_Lists: ['bed', 'No room lists yet', 'Room lists are created in the web app after travelers register.'],
      Coach_Lists: ['bus', 'No coach lists yet', 'Coach lists are created in the web app after travelers register.'],
      Notif_Sent: ['NotificationNotificationNo', 'No notifications yet', 'Notifications can be sent once the trip is confirmed.'],
      Notif_Scheduled: ['NotificationNotificationNo', 'Nothing scheduled', 'Notifications can be sent once the trip is confirmed.'],
      Notif_Drafts: ['NotificationNotificationNo', 'No drafts', 'Notifications can be sent once the trip is confirmed.'],
      Packet_View: ['receipt', 'No packets yet', 'Trip agreement and other packets are generated in the web app.'],
      Packet_Other: ['receipt', 'No packets yet', 'Trip agreement and other packets are generated in the web app.']
    };
    Object.keys(EMPTY).forEach(function (k) { var n = S[MAP[k]]; if (!n) return; var e = EMPTY[k];
      var seg = []; (n.blocks || []).forEach(function (b) { (b.items || []).forEach(function (it) { if (it.t === 'seg') seg.push(Object.assign({}, it, { active: it.active ? it.active.replace(/ \(\d+\)$/, '') : it.active, items: it.items.map(function (x) { return Object.assign({}, x, { label: x.label.replace(/ \(\d+\)$/, '') }); }) })); }); });
      n.blocks = [B([NT('Draft trip · view only. Make changes in the web app.', 'info', 'info')].concat(seg, [EM(e[0], e[1], e[2])]))]; });
    var DROP = ['Trav_Detail', 'Trav_Payments', 'Trav_Notes', 'Trav_PaySchedule', 'Notif_Detail', 'Rooms_Detail', 'Rooms_Detail_Partial', 'Coach_Detail', 'Vend_Detail', 'Vend_Contacts', 'Vend_Docs', 'Vend_Payments', 'Vend_Other'];
    DROP.forEach(function (k) { delete S[MAP[k]]; });
    SRC = SRC.filter(function (k) { return DROP.indexOf(k) < 0; });
    // de-duplicate identical empty states: one screen per module
    var SAME = { Pay_View_Standard: 'Pay_View', Pay_View_Variable: 'Pay_View', Pay_View_Lump: 'Pay_View', Trav_Waiting: 'Trav_List', Trav_Request: 'Trav_List', Trav_Canceled: 'Trav_List', Trav_Deactivated: 'Trav_List', Notif_Scheduled: 'Notif_Sent', Notif_Drafts: 'Notif_Sent', Packet_Other: 'Packet_View' };
    Object.keys(SAME).forEach(function (k) { delete S[MAP[k]]; MAP[k] = MAP[SAME[k]]; });
    SRC = SRC.filter(function (k) { return !SAME[k]; });
    ['Trav_List', 'Notif_Sent', 'Packet_View'].forEach(function (k) { var n = S[MAP[k]]; n.blocks = [B(n.blocks[0].items.filter(function (it) { return it.t !== 'seg'; }))]; });
    // partially set up: itinerary started, payment collection chosen but no pricing
    var NOTE_D = NT('Draft trip · view only. Make changes in the web app.', 'info', 'info');
    function NOTSET(label) { return H({ title: label, sub: 'Not set yet', tw: 500, chips: [['Not set', 'grey']], rowH: 44 }); }
    P('Itin_View_DP', { title: 'Itinerary', back: 'Trip_Details_Partial', right: { t: 'chip', label: 'Draft', tone: 'grey' }, blocks: [B([NOTE_D, TRIPSUB, MU('1 of 5 days planned · 2 events')]),
      clean(DAY(1, '12/10/2025', [EV('06:00 AM', 'School Trip Departure', LONG, true), EV('09:00 AM', 'Breakfast time', BF)], true)),
      C([MU('No events added yet')], { acc: { chip: 'DAY 2', title: '12/11/2025', open: true }, pad: 14, gap: 14, accBg: '#F3F5F8' }),
      C([MU('No events added yet')], { acc: { chip: 'DAY 3', title: '12/12/2025', open: false }, pad: 14, gap: 14, accBg: '#F3F5F8' })] });
    P('Pay_View_DP', { title: 'Payment Setup', back: 'Trip_Details_Partial', blocks: [B([NOTE_D]),
      G('Collection Type', [KV('Collection Type', 'Company Collect')]),
      G('Payment Type', [KV('Payment Type', 'Fixed Pricing'), NOTSET('Pricing Mode')]),
      G('Fixed Pricing', [NOTSET('Student Price'), DV, NOTSET('Adult Price')]),
      G('Payment Plan', [MU('No deposit or installments added yet.')]),
      G('Price updates', [NOTSET('Update trip price for the registered traveler(s)')])] });
    var base = S.Trip_Details_Draft, pd = {}; for (var x in base) pd[x] = base[x];
    pd.blocks = base.blocks.map(function (b) {
      var isReady = (b.items || []).some(function (it) { return it.t === 'steps'; });
      var isPay = (b.items || []).some(function (it) { return it.t === 'head' && it.title === 'Payment'; });
      if (isReady) return G('Trip Readiness', [MU('Trip Setup: 50% Complete, 2 out of 4 steps done.'), LK('Next: Payments (finish on web)', 'chev', 'Pay_View_DP', { trail: true }), { t: 'steps', items: [['Basic Details', true, 'Basic_View_D'], ['Itinerary', true, 'Itin_View_DP'], ['Payments', false, 'Pay_View_DP'], ['Vendor', false, 'Vend_List_D']] }]);
      if (isPay) return G('Payment', [KV('Collection Type', 'Company Collect'), KV('Payment Type', 'Fixed Pricing'), KV('Pricing', 'Not set yet'), LK('View payment setup', 'chev', 'Pay_View_DP', { trail: true })]);
      return b; });
    if (pd.tabs) pd.tabs = pd.tabs.map(function (t) { return t[2] === 'Itin_View_D' ? [t[0], t[1], 'Itin_View_DP', t[3]] : t[2] === 'Trip_Details_Draft' ? [t[0], t[1], 'Trip_Details_Partial', t[3]] : t; });
    var vd = S.Trip_ViewDetails_D, vp = {}; for (var y in vd) vp[y] = vd[y];
    vp.back = 'Trip_Details_Partial';
    vp.blocks = JSON.parse(JSON.stringify(vd.blocks).replace(/"Itin_View_D"/g, '"Itin_View_DP"').replace(/"Pay_View_D"/g, '"Pay_View_DP"'));
    P('Trip_ViewDetails_DP', vp);
    if (pd.right && pd.right.to) pd.right = Object.assign({}, pd.right, { to: 'Trip_ViewDetails_DP' });
    P('Trip_Details_Partial', pd);
    S.Itin_View_DP.back = 'Trip_ViewDetails_DP'; S.Pay_View_DP.back = 'Trip_ViewDetails_DP';
    window.__DRAFT_KEYS = [['Trip_Details_Partial', 'Trip Details · partly set up'], ['Trip_ViewDetails_DP', 'View Details · partly set up'], ['Itin_View_DP', 'Itinerary · partly set up'], ['Pay_View_DP', 'Payment Setup · partly set up']].concat(SRC.map(function (k) { return [MAP[k], ({ Rooms_Lists: 'Room List', Coach_Lists: 'Coach List' }[k] || (S[k].tabs ? S[k].tabsActive : S[k].title)) + (S[MAP[k]].blocks.some(function (b) { return (b.items || []).some(function (it) { return it.t === 'empty'; }); }) ? ' · not set up' : ' · draft')]; }));
  })();
})();
