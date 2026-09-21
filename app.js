/**
 * Devi Paksha - Main JavaScript
 * YouTube IFrame API + Player Logic + UI
 */

/* =========================================================
   DATA
   ========================================================= */
const PLAYLISTS = {
    durgaPuja: {
        key: 'durgaPuja',
        label: 'Durga Puja',
        pillLabel: 'PUJA RADIO',
        description: 'The main curated Durga Puja playlist.',
        sourceType: 'youtube',
        tracksAreDistinctVideos: true,
        tracks: [
            {id:'durga-001',title:'Dugga Elo',subtitle:'Monali Thakur',videoId:'SFJeglBF5cg',duration:147,durationLabel:'2:27'},
            {id:'durga-002',title:'Dugga Ma (Original Motion Picture Soundtrack)',subtitle:'Arijit Singh',videoId:'HeF8UhOYnq0',duration:271,durationLabel:'4:31'},
            {id:'durga-003',title:'Ebar Jeno Onno Rokom Pujo',subtitle:'Nakash Aziz Official',videoId:'S8WKJt7bWGg',duration:213,durationLabel:'3:33'},
            {id:'durga-004',title:'Dhak Baja Kashor Baja',subtitle:'Shreya Ghoshal Official',videoId:'7uzjfZ423Kc',duration:266,durationLabel:'4:26'},
            {id:'durga-005',title:'Bolo Dugga Elo',subtitle:'Kaushik-Guddu',videoId:'cAD7KutMTJw',duration:200,durationLabel:'3:20'},
            {id:'durga-006',title:'Aamaar Dugga',subtitle:'Monali Thakur',videoId:'w6SQsKD2U-Y',duration:200,durationLabel:'3:20'},
            {id:'durga-007',title:'Dhaker Taley',subtitle:'Release',videoId:'PqdxxIAgjgk',duration:283,durationLabel:'4:43'},
            {id:'durga-008',title:'Dugga Elo',subtitle:'Akriti Kakar',videoId:'G65AupY9ge0',duration:238,durationLabel:'3:58'},
            {id:'durga-009',title:'Shundori Komola',subtitle:'Release',videoId:'zSqRknvFD_s',duration:194,durationLabel:'3:14'},
            {id:'durga-010',title:'Elo Je Maa',subtitle:'Abhijeet Unplugged',videoId:'RB_5ED6GIao',duration:308,durationLabel:'5:08'},
            {id:'durga-011',title:'O Menoka O Menoka',subtitle:'ANTARA NANDY',videoId:'upYGF3YAHeo',duration:196,durationLabel:'3:16'},
            {id:'durga-012',title:'Ailo Uma Barite',subtitle:'ANTARA NANDY',videoId:'p_hqO0sJh-I',duration:233,durationLabel:'3:53'},
            {id:'durga-013',title:'Uma Ashe Notun Saje',subtitle:'Ankita Bhattacharyya',videoId:'x_Nar1eYzBM',duration:186,durationLabel:'3:06'},
            {id:'durga-014',title:'Abar Elo Maa',subtitle:'Rahul Dutta',videoId:'I5uMBp5wDhI',duration:187,durationLabel:'3:07'},
            {id:'durga-015',title:'Joy Joy Durga Ma',subtitle:'Agnibha Bandyopadhyay',videoId:'CWtqPoZrUoA',duration:351,durationLabel:'5:51'},
            {id:'durga-016',title:'Durga Maa',subtitle:'Akassh',videoId:'uLSEEBGr4Ag',duration:221,durationLabel:'3:41'},
            {id:'durga-017',title:'Gouri Elo Dekhe Jalo',subtitle:'DOHAR FOLK',videoId:'W-YAf-bHkCw',duration:340,durationLabel:'5:40'},
            {id:'durga-018',title:'Dhak Baaja Komor Nacha',subtitle:'Release',videoId:'JOQdF0wRjYY',duration:213,durationLabel:'3:33'},
            {id:'durga-019',title:'Durge Durge Durgatinashini',subtitle:'Asha Bhosle',videoId:'Ku7mJminJxI',duration:310,durationLabel:'5:10'},
            {id:'durga-020',title:'Rupang Dehi',subtitle:'Snita Pramanik Ghosh',videoId:'z-T4qiQMXaw',duration:258,durationLabel:'4:18'},
            {id:'durga-021',title:'Aigiri Nandini',subtitle:'Rajalakshmee Sanjay Official',videoId:'1Yycc3tejNw',duration:902,durationLabel:'15:02'},
            {id:'durga-022',title:'Baja Sanai Aar Baja Re Dhol',subtitle:'Abhijeet Unplugged',videoId:'nLrpLXaWbxk',duration:284,durationLabel:'4:44'},
            {id:'durga-023',title:'Elo Je Maa',subtitle:'Abhijeet Unplugged',videoId:'RB_5ED6GIao',duration:308,durationLabel:'5:08'},
            {id:'durga-024',title:'Maa Ashchhe',subtitle:'Sanjeev Tiwari',videoId:'ZusnukjtotQ',duration:207,durationLabel:'3:27'},
            {id:'durga-025',title:'Esho Maa Durga',subtitle:'Shamik Guha Roy',videoId:'hDve9YmTZq4',duration:237,durationLabel:'3:57'},
            {id:'durga-026',title:'Maa Go Tui',subtitle:'Somchanda Bhattacharya',videoId:'8z-SSVEj9o8',duration:120,durationLabel:'2:00'},
            {id:'durga-027',title:'Jago Uma (ORIGINAL)',subtitle:'Rupankar',videoId:'sto9TBxGibE',duration:318,durationLabel:'5:18'},
            {id:'durga-028',title:'Aigiri Nandini (Rock Version)',subtitle:'Sowrabha',videoId:'mXqUIFUYqpM',duration:297,durationLabel:'4:57'},
            {id:'durga-029',title:'Ailo Uma Barite',subtitle:'ANTARA NANDY',videoId:'p_hqO0sJh-I',duration:233,durationLabel:'3:53'},
            {id:'durga-030',title:'Aaj Baaje',subtitle:'Somchanda Bhattacharya',videoId:'UpeueoYgHnE',duration:214,durationLabel:'3:34'},
            {id:'durga-031',title:'Yoddhar Saathe Ebar Pujo Katan',subtitle:'Nakash Aziz Official',videoId:'-vPbyevbN4k',duration:227,durationLabel:'3:47'},
            {id:'durga-032',title:'Pujo Pujo Gondho',subtitle:'Anupam Roy',videoId:'9fG229zIL_0',duration:167,durationLabel:'2:47'},
            {id:'durga-033',title:'Pujor Dhaak Theme',subtitle:'Bibhabendu Bhattacharya Official',videoId:'E40N8rKKTCc',duration:91,durationLabel:'1:31'},
            {id:'durga-034',title:'Jaago Uma',subtitle:'Anupam Roy',videoId:'fpuadv59iYw',duration:318,durationLabel:'5:18'},
            {id:'durga-035',title:'Pujor Gaan',subtitle:'Poushali Bhattacharya',videoId:'srJlx60zfBQ',duration:285,durationLabel:'4:45'},
            {id:'durga-036',title:'Aamaar Dugga',subtitle:'Monali Thakur',videoId:'w6SQsKD2U-Y',duration:200,durationLabel:'3:20'},
            {id:'durga-037',title:'Gouri Elo (From Raktabeej)',subtitle:'DOHAR FOLK',videoId:'jwMo3vrsL7s',duration:237,durationLabel:'3:57'},
            {id:'durga-038',title:'Aham Rudre',subtitle:'Release',videoId:'nH65Xk8kPjQ',duration:159,durationLabel:'2:39'},
            {id:'durga-039',title:'Elo Re Pujo Elo',subtitle:'Dabbu',videoId:'YNxK-eLJmro',duration:193,durationLabel:'3:13'},
            {id:'durga-040',title:'Chaarpashe Aalo Hok',subtitle:'Release',videoId:'Rx7l8bjzjg4',duration:694,durationLabel:'11:34'},
            {id:'durga-041',title:'O Thakur',subtitle:'Upal Sengupta',videoId:'CYcqPK0Dl60',duration:174,durationLabel:'2:54'},
            {id:'durga-042',title:'Shubho Shubho',subtitle:'Altamash Faridi',videoId:'PEiFJAy_zsM',duration:194,durationLabel:'3:14'},
            {id:'durga-043',title:'He Maa Durga Maa',subtitle:'Aseema Panda',videoId:'YnU9c1aj5hY',duration:312,durationLabel:'5:12'},
            {id:'durga-044',title:'Durga Maa Eseche',subtitle:'Akassh',videoId:'VNI_XEx7z-g',duration:187,durationLabel:'3:07'},
            {id:'durga-045',title:'Eseche Maa Durga Maa (DJ Remix)',subtitle:'Keshab Dey',videoId:'avySoa5OW1w',duration:183,durationLabel:'3:03'},
            {id:'durga-046',title:'Kolki',subtitle:'Monami Ghosh',videoId:'hDukD5TJmV4',duration:245,durationLabel:'4:05'},
            {id:'durga-047',title:'Dugga Ma Asche',subtitle:'Infra',videoId:'LLer3VPOcxg',duration:214,durationLabel:'3:34'},
            {id:'durga-048',title:'Debi Sajer Gaan',subtitle:'Rupak Tiary',videoId:'BvIcx9ev8X0',duration:181,durationLabel:'3:01'},
            {id:'durga-049',title:'Tomake Chai',subtitle:'Arijit Singh',videoId:'ny3oWUnm2Mk',duration:254,durationLabel:'4:14'},
            {id:'durga-050',title:'Meri Maa Ke Barabar Koi Nahi',subtitle:'Jubin Nautiyal',videoId:'j9_MLElmS9g',duration:299,durationLabel:'4:59'},
            {id:'durga-051',title:'Dugga Elo',subtitle:'Monali Thakur',videoId:'SFJeglBF5cg',duration:147,durationLabel:'2:27'},
            {id:'durga-052',title:'Bajlo Tomar Aalor Benu',subtitle:'Release',videoId:'cFsCf0MGuuA',duration:316,durationLabel:'5:16'},
            {id:'durga-053',title:'Durge Durge Durgatinashini',subtitle:'Release',videoId:'63X0l49OyjI',duration:223,durationLabel:'3:43'},
            {id:'durga-054',title:'Madhukaitava Vidhwangsi',subtitle:'Tushar Dutta',videoId:'_GUdZJQun2I',duration:589,durationLabel:'9:49'},
            {id:'durga-055',title:'Kalo Jole Kuchla Tole',subtitle:'IMAN',videoId:'QvhNGDZhJvE',duration:263,durationLabel:'4:23'},
            {id:'durga-056',title:'Bajlo Tomar Alor Benu',subtitle:'Sriparna Das',videoId:'j7nWykTLEMs',duration:284,durationLabel:'4:44'},
            {id:'durga-057',title:'Bajlo Tomar Aalor Benu',subtitle:'Release',videoId:'cFsCf0MGuuA',duration:316,durationLabel:'5:16'},
            {id:'durga-058',title:'Bajlo Tomar Aalor Benu With Narration',subtitle:'Supriti Ghosh',videoId:'DxaNt-pmObM',duration:264,durationLabel:'4:24'},
            {id:'durga-059',title:'Mahishasura Mardhini',subtitle:'Release',videoId:'wLVkrgkoPro',duration:353,durationLabel:'5:53'},
            {id:'durga-060',title:'Ya Chandi',subtitle:'Chorus',videoId:'6ZCfPaz28_U',duration:97,durationLabel:'1:37'},
            {id:'durga-061',title:'Jago Tumi Jago',subtitle:'Trissha Chatterjee',videoId:'YC4ERU01ZxY',duration:149,durationLabel:'2:29'},
            {id:'durga-062',title:'Borondala Saaja',subtitle:'Madhuraa Bhattacharya',videoId:'Z7kpAzbC66E',duration:161,durationLabel:'2:41'},
            {id:'durga-063',title:'Phagun Haoyay Haoyay',subtitle:'Jayati Chakraborty',videoId:'43_oBh4YsQs',duration:155,durationLabel:'2:35'},
            {id:'durga-064',title:'Ogo Amar Agamani-alo',subtitle:'Sipra Basu',videoId:'_RmN29SHVS8',duration:200,durationLabel:'3:20'},
            {id:'durga-065',title:'Raai Jago Go',subtitle:'Pousali Banerjee',videoId:'aNPO5geLn_E',duration:360,durationLabel:'6:00'},
            {id:'durga-066',title:'Rupang Dehi',subtitle:'Snita Pramanik Ghosh',videoId:'z-T4qiQMXaw',duration:258,durationLabel:'4:18'},
            {id:'durga-067',title:'ওগো আমার আগমনী আলো',subtitle:'Samadrita Ghosh',videoId:'PRTXLKCV6Nk',duration:291,durationLabel:'4:51'},
            {id:'durga-068',title:'Durge Durge Durgatinashini',subtitle:'Asha Bhosle',videoId:'gbGVjyHq8iA',duration:310,durationLabel:'5:10'},
            {id:'durga-069',title:'Agomonir Gaan',subtitle:'Anupam Roy',videoId:'ocCQ1UVsel8',duration:347,durationLabel:'5:47'},
            {id:'durga-070',title:'Saajan Rock the Dotara',subtitle:'Timir Biswas Studio',videoId:'707QgEnx8Hs',duration:268,durationLabel:'4:28'},
            {id:'durga-071',title:'Pujar Gaan',subtitle:'Hooligaanism',videoId:'d-NMikRHMQQ',duration:393,durationLabel:'6:33'},
            {id:'durga-072',title:'Asatoma Sadgamaya',subtitle:'Arijit Singh',videoId:'WM0waOKjzkE',duration:187,durationLabel:'3:07'},
            {id:'durga-073',title:'Gouri Elo',subtitle:'Aritra Dasgupta',videoId:'ADpMft-PUb8',duration:335,durationLabel:'5:35'},
            {id:'durga-074',title:'Doob De Re Mon',subtitle:'Nirmalya Roy',videoId:'S-XOArX0faE',duration:136,durationLabel:'2:16'},
            {id:'durga-075',title:'Apur Paayer Chhaap',subtitle:'Arijit Singh',videoId:'aJBZvnbS9vM',duration:246,durationLabel:'4:06'},
            {id:'durga-076',title:'Eshe Hey',subtitle:'Release',videoId:'AFOg5wPxduc',duration:354,durationLabel:'5:54'},
            {id:'durga-077',title:'Laage Ura Dhura',subtitle:'Pritom Hasan',videoId:'jkCWHTt2ml4',duration:194,durationLabel:'3:14'},
            {id:'durga-078',title:'Bholey Baba',subtitle:'Release',videoId:'VUl071_Qw6E',duration:270,durationLabel:'4:30'},
            {id:'durga-079',title:'Dushtu Kokil',subtitle:'KONA',videoId:'NwjbjGQXkdU',duration:211,durationLabel:'3:31'},
            {id:'durga-080',title:'Mala Re (ORIGINAL)',subtitle:'JEET GANNGULI OFFICIAL',videoId:'G2tTYmSzR6U',duration:248,durationLabel:'4:08'},
            {id:'durga-081',title:'Koka Kola',subtitle:'Samidh Mukherjee',videoId:'_QpaZZzXCiQ',duration:300,durationLabel:'5:00'},
            {id:'durga-082',title:'Michhrir Dana',subtitle:'Shreya Ghoshal Official',videoId:'8xtWhxDvq7s',duration:214,durationLabel:'3:34'},
            {id:'durga-083',title:'Desi Chhori',subtitle:'Release',videoId:'QL6chT20jz8',duration:229,durationLabel:'3:49'},
            {id:'durga-084',title:'Party Shoes',subtitle:'Release',videoId:'IFkARpGk8FA',duration:226,durationLabel:'3:46'},
            {id:'durga-085',title:'Bujhina Toh Tai',subtitle:'Nusraat Faria',videoId:'tMD3VtUyGz8',duration:185,durationLabel:'3:05'},
            {id:'durga-086',title:'Lady Killer Romeo (ORIGINAL)',subtitle:'JEET GANNGULI OFFICIAL',videoId:'eoLZVAk9t_U',duration:227,durationLabel:'3:47'},
            {id:'durga-087',title:'Police Chorer Preme Porechhe',subtitle:'Jeet Gannguli',videoId:'qrCDBZZ_SxM',duration:256,durationLabel:'4:16'},
            {id:'durga-088',title:'Baundule Ghuri',subtitle:'Anupam Roy',videoId:'4vrS8JUUkQA',duration:344,durationLabel:'5:44'},
            {id:'durga-089',title:'Tumi Jantei Paro Naa',subtitle:'Mahtim Shakib',videoId:'f9FX9_MN-G4',duration:225,durationLabel:'3:45'},
            {id:'durga-090',title:'Taakey Olpo Kachhe Dakchhi',subtitle:'Mahtim Shakib',videoId:'zCj_U2nc_Hk',duration:195,durationLabel:'3:15'},
            {id:'durga-091',title:'Egiye De',subtitle:'Release',videoId:'Ev1NLm7Kd4g',duration:254,durationLabel:'4:14'},
            {id:'durga-092',title:'Shudhu Tomari Jonyo Theme',subtitle:'Arijit Singh',videoId:'y6g8eSP0MB0',duration:197,durationLabel:'3:17'},
            {id:'durga-093',title:'Amake Nao',subtitle:'Debayan Banerjee',videoId:'9yxSXBjT8jg',duration:190,durationLabel:'3:10'},
            {id:'durga-094',title:'Sajani',subtitle:'Nilayan Chatterjee',videoId:'55lHMJ4OnMo',duration:208,durationLabel:'3:28'},
            {id:'durga-095',title:'Pheshey Jaai',subtitle:'Release',videoId:'lan_A5i_JwY',duration:251,durationLabel:'4:11'},
            {id:'durga-096',title:'Ure Geche',subtitle:'Ash King',videoId:'tDolwm2f9g0',duration:267,durationLabel:'4:27'},
            {id:'durga-097',title:'Aashona',subtitle:'Arijit Singh',videoId:'IXgannYJ9mE',duration:244,durationLabel:'4:04'},
            {id:'durga-098',title:'Era Sukher Laagi',subtitle:'Release',videoId:'yB5tJlDGQo4',duration:165,durationLabel:'2:45'},
            {id:'durga-099',title:'Tumi Aashe Paashe',subtitle:'Nakash Aziz Official',videoId:'4TmNBuJXpns',duration:262,durationLabel:'4:22'},
            {id:'durga-100',title:'Hey Shokha',subtitle:'Somlata Acharyya Chowdhury',videoId:'EVPIkFIVHCg',duration:264,durationLabel:'4:24'},
            {id:'durga-101',title:'Shaajo Shaajao',subtitle:'Release',videoId:'VF0T1YLzkEw',duration:273,durationLabel:'4:33'},
            {id:'durga-102',title:'Notun Premer Gaan',subtitle:'Debraj Bhattacharya',videoId:'RQ1WrgD8vrA',duration:230,durationLabel:'3:50'},
            {id:'durga-103',title:'Tumi Emni Emni Esho',subtitle:'Sanchita Bhowmick',videoId:'0-rIe6yzwGE',duration:217,durationLabel:'3:37'},
            {id:'durga-104',title:'Maa Go Tui (ORIGINAL)',subtitle:'Shovan Ganguly Official',videoId:'8NeUGOEpGh0',duration:120,durationLabel:'2:00'},
            {id:'durga-105',title:'Khoka Babu',subtitle:'Rishi',videoId:'a0ZwJJSlxC8',duration:257,durationLabel:'4:17'},
            {id:'durga-106',title:'Pyaar Ka Bukhaar',subtitle:'Jeet Gannguli',videoId:'Bx2avxFHwM0',duration:214,durationLabel:'3:34'},
            {id:'durga-107',title:'Ankhiyon Ke Jharokhon Se',subtitle:'Rajshri',videoId:'KqpIIaCJggY',duration:405,durationLabel:'6:45'},
        ]
    },
    ogMahalaya: {
        key: 'ogMahalaya',
        label: 'Mahalaya',
        pillLabel: 'MAHALAYA',
        description: 'The complete traditional Mahalaya broadcast, in full.',
        sourceType: 'youtube',
        youtubeVideoId: 'YQyo8QeoYhc',
        thumbnail: 'https://img.youtube.com/vi/YQyo8QeoYhc/hqdefault.jpg',
        tracks: [
            {id:'og-mahalaya-full', title:'Mahalaya', subtitle:'Birendra Krishna Bhadra', start:0, end:null, duration:null}
        ]
    },
    mahalaya: {
        key: 'mahalaya',
        label: 'Mahalaya Songs',
        pillLabel: 'MAHALAYA SONGS',
        description: '19 sections of one classic Mahalaya recording.',
        sourceType: 'youtube',
        youtubeVideoId: 'LOlyrK53QM4',
        thumbnail: 'https://img.youtube.com/vi/LOlyrK53QM4/hqdefault.jpg',
        tracks: [
            {id:1, title:'Ya Chandi',                                subtitle:'Mahalaya', start:4,    end:103},
            {id:2, title:'Simhastha Sashisekhara',                   subtitle:'Mahalaya', start:103,  end:159},
            {id:3, title:'Bajlo Tomar Aalor Benu With Narration',    subtitle:'Mahalaya', start:159,  end:421},
            {id:4, title:'Jago Durga Dashapraharanadharinee',        subtitle:'Mahalaya', start:421,  end:528},
            {id:5, title:'Ogo Amar Agamani-alo',                     subtitle:'Mahalaya', start:528,  end:727},
            {id:6, title:'Tabo Achintya Rupa-charita-mahima',        subtitle:'Mahalaya', start:727,  end:966},
            {id:7, title:'Aham Rudrebhirvasubhischara',              subtitle:'Mahalaya', start:966,  end:1207},
            {id:8, title:'Akhila-bimane Taba Jaya-gane',             subtitle:'Mahalaya', start:1207, end:1451},
            {id:9, title:'Jayanati Mangala Kali',                    subtitle:'Mahalaya', start:1451, end:1483},
            {id:10,title:'Subhra Sankha-rabe',                       subtitle:'Mahalaya', start:1483, end:1653},
            {id:11,title:'Jatajutasamayuktamardhendukrita-sekharam', subtitle:'Mahalaya', start:1653, end:1920},
            {id:12,title:'Namo Chandi, Namo Chandi',                 subtitle:'Mahalaya', start:1920, end:2105},
            {id:13,title:'Ma Go Tabu Beene Sangeeta',                subtitle:'Mahalaya', start:2105, end:2318},
            {id:14,title:'Bimane Bimane',                            subtitle:'Mahalaya', start:2318, end:2499},
            {id:15,title:'Jaya Jaya Japyajaye',                     subtitle:'Mahalaya', start:2499, end:2651},
            {id:16,title:'He Chinmoyi',                              subtitle:'Mahalaya', start:2651, end:2827},
            {id:17,title:'Amala-kirane Tribhubana-manoharini',       subtitle:'Mahalaya', start:2827, end:3072},
            {id:18,title:'Jayanti Mangala Kali — Pankaj Kumar Mullick',subtitle:'Mahalaya',start:3072, end:3491},
            {id:19,title:'Santi Dile Bhari',                         subtitle:'Mahalaya', start:3491, end:null},
        ]
    }
};

const PLAYLIST_KEYS = ['durgaPuja', 'ogMahalaya', 'mahalaya'];

/* =========================================================
   DURGA PUJA TARGET DATE (16 October 2026, Bangladesh Time UTC+06:00)
   ========================================================= */
const PUJA_DATE = new Date('2026-10-16T00:00:00+06:00');

/* =========================================================
   STATE
   ========================================================= */
let ytPlayer = null;
let ytReady  = false;
let ytCurrentVideoId = null;

let state = {
    playlistKey: 'durgaPuja',
    trackIndex:  0,
    isPlaying:   false,
    currentTime: 0,
    duration:    0,
    shuffle:     false,
    repeat:      false,
    shuffleQueue: [],
    shuffleHistory: [],
};

/* =========================================================
   HELPERS
   ========================================================= */
function fmtTime(s) {
    s = Math.max(0, Math.floor(s));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    return `${m}:${String(sec).padStart(2,'0')}`;
}

function ytThumb(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
function ytThumbFallback(videoId) {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

function currentPlaylist()  { return PLAYLISTS[state.playlistKey]; }
function currentTrack()     { const pl = currentPlaylist(); return pl.tracks[state.trackIndex] || pl.tracks[0]; }

/* =========================================================
   YOUTUBE IFRAME API
   ========================================================= */
let ytAPIPromise = null;
function loadYTApi() {
    if (ytAPIPromise) return ytAPIPromise;
    ytAPIPromise = new Promise(resolve => {
        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            if (prev) prev();
            resolve(window.YT);
        };
        if (window.YT && window.YT.Player) {
            resolve(window.YT);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);
    });
    return ytAPIPromise;
}

function initYTPlayer() {
    loadYTApi().then(YT => {
        ytPlayer = new YT.Player('yt-player', {
            host: 'https://www.youtube-nocookie.com',
            width: '1', height: '1',
            playerVars: { controls: 0, disablekb: 1, playsinline: 1, rel: 0, modestbranding: 1 },
            events: {
                onReady: () => {
                    ytReady = true;
                    // Cue first track
                    loadTrack(state.playlistKey, 0, false);
                },
                onStateChange: (e) => {
                    const YTS = YT.PlayerState;
                    if (e.data === YTS.PLAYING) {
                        state.isPlaying = true;
                        updatePlayPauseBtn();
                        startProgressPoll();
                    } else if (e.data === YTS.PAUSED) {
                        state.isPlaying = false;
                        updatePlayPauseBtn();
                    } else if (e.data === YTS.ENDED) {
                        state.isPlaying = false;
                        updatePlayPauseBtn();
                        if (currentPlaylist().tracksAreDistinctVideos) {
                            goNext();
                        } else {
                            goNext();
                        }
                    }
                    const dur = ytPlayer.getDuration?.() || 0;
                    if (dur) state.duration = dur;
                    updateSeek();
                }
            }
        });
    });
}

/* =========================================================
   PROGRESS POLLING
   ========================================================= */
let progressInterval = null;

function startProgressPoll() {
    if (progressInterval) return;
    progressInterval = setInterval(() => {
        if (!ytPlayer || !state.isPlaying) return;
        const raw = ytPlayer.getCurrentTime?.() || 0;
        const track = currentTrack();
        state.currentTime = Math.max(0, raw - (track.start || 0));
        const dur = ytPlayer.getDuration?.() || 0;
        state.duration = dur;
        // Check if segment ended
        if (track.end != null && raw >= track.end) {
            clearInterval(progressInterval);
            progressInterval = null;
            goNext();
            return;
        }
        updateSeek();
    }, 400);
}

function stopProgressPoll() {
    if (progressInterval) { clearInterval(progressInterval); progressInterval = null; }
}

/* =========================================================
   PLAYBACK CONTROL
   ========================================================= */
function loadTrack(plKey, idx, autoplay) {
    const pl = PLAYLISTS[plKey];
    if (!pl) return;
    const track = pl.tracks[idx];
    if (!track) return;

    const videoId = track.videoId || pl.youtubeVideoId;
    if (!ytReady || !ytPlayer) return;

    state.playlistKey = plKey;
    state.trackIndex  = idx;
    state.currentTime = 0;
    stopProgressPoll();

    if (ytCurrentVideoId === videoId) {
        const seekTo = track.start || 0;
        ytPlayer.seekTo(seekTo, true);
        if (autoplay) ytPlayer.playVideo(); else ytPlayer.pauseVideo();
    } else {
        ytCurrentVideoId = videoId;
        if (autoplay) {
            ytPlayer.loadVideoById({ videoId, startSeconds: track.start || 0 });
        } else {
            ytPlayer.cueVideoById({ videoId, startSeconds: track.start || 0 });
        }
    }

    updateUI();
}

function togglePlay() {
    if (!ytReady || !ytPlayer) return;
    const track  = currentTrack();
    const pl     = currentPlaylist();
    const videoId = track.videoId || pl.youtubeVideoId;

    if (state.isPlaying) {
        ytPlayer.pauseVideo();
    } else {
        if (ytCurrentVideoId === videoId) {
            ytPlayer.playVideo();
        } else {
            loadTrack(state.playlistKey, state.trackIndex, true);
        }
    }
}

function goNext() {
    stopProgressPoll();
    const pl    = currentPlaylist();
    const total = pl.tracks.length;
    let nextIdx;

    if (state.repeat) {
        nextIdx = state.trackIndex;
    } else if (state.shuffle && total > 1) {
        if (!state.shuffleQueue.length) {
            state.shuffleQueue = shuffledIndices(total, state.trackIndex);
        }
        nextIdx = state.shuffleQueue.shift();
        state.shuffleHistory.push(nextIdx);
    } else {
        nextIdx = (state.trackIndex + 1) % total;
    }
    loadTrack(state.playlistKey, nextIdx, true);
}

function goPrev() {
    stopProgressPoll();
    const pl    = currentPlaylist();
    const total = pl.tracks.length;
    let prevIdx;

    if (state.shuffle && state.shuffleHistory.length > 1) {
        state.shuffleHistory.pop();
        prevIdx = state.shuffleHistory[state.shuffleHistory.length - 1];
    } else {
        prevIdx = (state.trackIndex - 1 + total) % total;
    }
    loadTrack(state.playlistKey, prevIdx, true);
}

function selectTrack(plKey, idx) {
    loadTrack(plKey, idx, true);
}

function selectPlaylist(plKey) {
    if (plKey === state.playlistKey) return;
    state.shuffleQueue   = [];
    state.shuffleHistory = [0];
    loadTrack(plKey, 0, false);
}

function seekTo(fraction) {
    if (!ytPlayer) return;
    const track = currentTrack();
    const seg   = (track.end || state.duration) - (track.start || 0);
    ytPlayer.seekTo((track.start || 0) + fraction * seg, true);
}

function toggleShuffle() {
    state.shuffle = !state.shuffle;
    if (state.shuffle) {
        state.repeat = false;
        state.shuffleQueue   = [];
        state.shuffleHistory = [state.trackIndex];
    } else {
        state.shuffleQueue = [];
    }
    updateControlBtns();
}

function toggleRepeat() {
    state.repeat = !state.repeat;
    if (state.repeat) state.shuffle = false;
    updateControlBtns();
}

function shuffledIndices(n, exclude) {
    const arr = [];
    for (let i = 0; i < n; i++) if (i !== exclude) arr.push(i);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/* =========================================================
   SEEK BAR INTERACTION
   ========================================================= */
function setupSeekBar() {
    const bar = document.getElementById('seek-bar-track');
    if (!bar) return;

    function onSeek(e) {
        const rect = bar.getBoundingClientRect();
        const frac = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        seekTo(frac);
    }

    bar.addEventListener('click', onSeek);
    bar.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        onSeek(e);
        const onMove = (me) => onSeek(me);
        const onUp   = () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup',   onUp);
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup',   onUp);
    });
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function updateCountdown() {
    const now  = new Date();
    let diff   = Math.max(0, PUJA_DATE - now);
    const days = Math.floor(diff / 86400000); diff %= 86400000;
    const hrs  = Math.floor(diff /  3600000); diff %=  3600000;
    const mins = Math.floor(diff /    60000); diff %=    60000;
    const secs = Math.floor(diff /     1000);

    setText('cd-days', String(days).padStart(2,'0'));
    setText('cd-hrs',  String(hrs).padStart(2,'0'));
    setText('cd-mins', String(mins).padStart(2,'0'));
    setText('cd-secs', String(secs).padStart(2,'0'));
}

/* =========================================================
   UI UPDATES
   ========================================================= */
function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

function updatePlayPauseBtn() {
    const btn = document.getElementById('btn-play');
    if (!btn) return;
    const playPath  = 'M8 5v14l11-7z';
    const pausePath = 'M6 5h4v14H6zm8 0h4v14h-4z';
    const path = btn.querySelector('path');
    if (path) path.setAttribute('d', state.isPlaying ? pausePath : playPath);
    btn.setAttribute('aria-pressed', state.isPlaying);
}

function updateSeek() {
    const fill = document.getElementById('seek-fill');
    const timeEl = document.getElementById('current-time');
    const durEl  = document.getElementById('total-time');

    const track = currentTrack();
    const segDur = (track.end != null ? track.end : state.duration) - (track.start || 0);
    const pct = segDur > 0 ? Math.min(100, (state.currentTime / segDur) * 100) : 0;

    if (fill) fill.style.width = pct + '%';
    if (timeEl) timeEl.textContent = fmtTime(state.currentTime);
    if (durEl)  durEl.textContent  = fmtTime(segDur);
}

function updatePlayerCard() {
    const track = currentTrack();
    const pl    = currentPlaylist();

    setText('player-title',    track.title);
    setText('player-subtitle', track.subtitle);
    setText('pill-label',      pl.pillLabel);

    const art = document.getElementById('player-art-img');
    if (art) {
        const isDurgaPuja = state.playlistKey === 'durgaPuja';
        const src = isDurgaPuja && track.videoId
            ? ytThumb(track.videoId)
            : (pl.thumbnail || '');
        art.src = src;
        art.onerror = isDurgaPuja && track.videoId
            ? () => { art.src = ytThumbFallback(track.videoId); art.onerror = null; }
            : null;
    }

    updateSeek();
    updatePlayPauseBtn();
    updateControlBtns();
}

function updateControlBtns() {
    const btnShuffle = document.getElementById('btn-shuffle');
    const btnRepeat  = document.getElementById('btn-repeat');
    const btnShufMob = document.getElementById('btn-shuffle-mob');
    const btnRepMob  = document.getElementById('btn-repeat-mob');
    const multiTrack = currentPlaylist().tracks.length > 1;

    [document.getElementById('btn-prev'), document.getElementById('btn-next')].forEach(b => {
        if (b) b.disabled = !multiTrack;
    });

    if (btnShuffle)  btnShuffle.classList.toggle('active',  state.shuffle);
    if (btnRepeat)   btnRepeat.classList.toggle('active',   state.repeat);
    if (btnShufMob)  btnShufMob.classList.toggle('active',  state.shuffle);
    if (btnRepMob)   btnRepMob.classList.toggle('active',   state.repeat);
}

function updateUI() {
    updatePlayerCard();
    renderTrackList();
}

/* =========================================================
   TRACK LIST (in modal)
   ========================================================= */
function renderTrackList() {
    const container = document.getElementById('track-list');
    if (!container) return;

    const pl = PLAYLISTS[modalState.playlistKey];
    if (!pl) return;

    container.innerHTML = pl.tracks.map((t, i) => {
        const isActive = modalState.playlistKey === state.playlistKey && i === state.trackIndex;
        const isDurgaPuja = modalState.playlistKey === 'durgaPuja';
        const thumbSrc = isDurgaPuja && t.videoId
            ? `https://img.youtube.com/vi/${t.videoId}/mqdefault.jpg`
            : (pl.thumbnail || '');

        const durText = t.durationLabel
            || (t.end != null && t.start != null ? fmtTime(t.end - t.start) : '');

        const indexContent = isActive && state.isPlaying
            ? `<div class="playing-icon"><span></span><span></span><span></span></div>`
            : String(i + 1).padStart(2, '0');

        return `
        <button class="track-row${isActive ? ' is-active' : ''}"
                data-playlist="${modalState.playlistKey}" data-index="${i}"
                aria-label="Play ${escHtml(t.title)}">
            <span class="track-index">${isActive && state.isPlaying ? indexContent : String(i+1).padStart(2,'0')}</span>
            <div class="track-thumb">
                ${thumbSrc ? `<img src="${escHtml(thumbSrc)}" alt="" loading="lazy">` : ''}
            </div>
            <div class="track-meta">
                <p class="track-name">${escHtml(t.title)}</p>
                <p class="track-artist">${escHtml(t.subtitle || '')}</p>
            </div>
            ${durText ? `<span class="track-dur">${escHtml(durText)}</span>` : ''}
        </button>`;
    }).join('');

    // Bind clicks
    container.querySelectorAll('.track-row').forEach(btn => {
        btn.addEventListener('click', () => {
            const plKey = btn.dataset.playlist;
            const idx   = parseInt(btn.dataset.index, 10);
            selectTrack(plKey, idx);
            closeModal('playlist-modal');
            renderTrackList();
        });
    });

    // Scroll active into view
    const activeEl = container.querySelector('.is-active');
    if (activeEl) activeEl.scrollIntoView({ block: 'nearest' });
}

function escHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* =========================================================
   MODAL STATE
   ========================================================= */
let modalState = { playlistKey: 'durgaPuja' };

function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('hidden');
    if (id === 'playlist-modal') {
        modalState.playlistKey = state.playlistKey;
        updateModalTabs();
        renderTrackList();
    }
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('hidden');
}

function updateModalTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.playlist === modalState.playlistKey);
    });
    const desc = document.getElementById('playlist-desc');
    if (desc) desc.textContent = PLAYLISTS[modalState.playlistKey].description;
}

function switchModalTab(plKey) {
    modalState.playlistKey = plKey;
    updateModalTabs();
    renderTrackList();
}

/* =========================================================
   PARTICLES
   ========================================================= */
function spawnParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left   = Math.random() * 100 + '%';
        p.style.top    = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 10) + 's';
        p.style.animationDelay   = -(Math.random() * 10) + 's';
        p.style.width  = p.style.height = (1 + Math.random() * 2) + 'px';
        p.style.opacity = (0.3 + Math.random() * 0.5).toString();
        container.appendChild(p);
    }
}

/* =========================================================
   COPY TO CLIPBOARD
   ========================================================= */
function setupCopyBtn(btnId, text) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
        navigator.clipboard?.writeText(text).catch(() => {});
        btn.classList.add('copied');
        const lbl = btn.querySelector('.copy-label-text');
        if (lbl) lbl.textContent = 'Copied!';
        setTimeout(() => {
            btn.classList.remove('copied');
            if (lbl) lbl.textContent = 'Copy';
        }, 1800);
    });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Particles
    spawnParticles();

    // YouTube player
    initYTPlayer();

    // Seek bar
    setupSeekBar();

    // Play / pause
    document.getElementById('btn-play')?.addEventListener('click', togglePlay);
    document.getElementById('btn-prev')?.addEventListener('click', goPrev);
    document.getElementById('btn-next')?.addEventListener('click', goNext);

    // Shuffle / repeat (desktop)
    document.getElementById('btn-shuffle')?.addEventListener('click', toggleShuffle);
    document.getElementById('btn-repeat')?.addEventListener('click',  toggleRepeat);

    // Mobile extra bar
    document.getElementById('btn-shuffle-mob')?.addEventListener('click', toggleShuffle);
    document.getElementById('btn-repeat-mob')?.addEventListener('click',  toggleRepeat);

    // Open playlist modal
    document.getElementById('btn-open-playlist')?.addEventListener('click', () => openModal('playlist-modal'));

    // Close buttons
    document.getElementById('close-playlist-modal')?.addEventListener('click', () => closeModal('playlist-modal'));
    document.getElementById('close-dev-modal')?.addEventListener('click',      () => closeModal('dev-modal'));

    // Backdrops
    document.getElementById('playlist-backdrop')?.addEventListener('click', () => closeModal('playlist-modal'));
    document.getElementById('dev-backdrop')?.addEventListener('click',      () => closeModal('dev-modal'));

    // Dev modal
    document.getElementById('btn-open-dev')?.addEventListener('click', () => openModal('dev-modal'));

    // Modal tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchModalTab(btn.dataset.playlist));
    });

    // Keyboard
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal('playlist-modal');
            closeModal('dev-modal');
        }
    });

    // Copy email & WhatsApp
    setupCopyBtn('copy-email-btn', 'sujoy.sarker1323@gmail.com');
    setupCopyBtn('copy-whatsapp-btn', '+8801770400652');

    // Initial UI
    updatePlayerCard();
});
