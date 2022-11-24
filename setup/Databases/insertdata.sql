INSERT INTO `userlogin` (`id`, `name`, `email`, `password`, `imgurl`, `provider`, `secure`) VALUES
('117805864635566431829', 'Vinay Dutt Vatsa', 'vinayduttvatsa@gmail.com', 'ya29.A0ARrdaM_yBoAT1h6xPVFb_Ke5L_vPne_xEuoVAP6xOnaDftPst4OgHKMkz9frZbiKBVWV6AO17vdC4M4wCBbELvfpmHs6aW6dLG67l4ekvdrv2fBw_qi5JgpUF9Sdu1zopM6JfqSCgfvMajjNY5Yq5b4Yxfvz', 'https://geekspool.com/images/logo.jpeg', 'google', 1),
('1642997796596', 'New User', 'du7rgesh@gmail.com', '$2b$10$Q1YtLlvQuqbNyK31oe6OCezM6cq2fMoTaoaAHWvgH8yeQ0sbAv1b2', 'https://geekspool.com/images/logo.jpeg', 'geekspool', 1);

--#

CALL Upload_dropDown_Details('language',
"Abkhazian;Afar;Akan;Albanian;Afrikaans;Amharic;Arabic;Aragonese;Armenian;Assamese;Avaric;Avestan;Aymara;Azerbaijani;Bambara;Bashkir;Basque;Belarusian;Bengali (Bangla);Bihari;Bislama;Bosnian;Breton;Bulgarian;Burmese;Catalan;Chamorro;Chechen;Chichewa, Chewa, Nyanja;Chinese;Chinese (Simplified);Chinese (Traditional);Chuvash;Cornish;Corsican;Cree;Croatian;Czech;Danish;Divehi, Dhivehi, Maldivian;Dutch;Dzongkha;English;Esperanto;Estonian;Ewe;Faroese;Fijian;Finnish;French;Fula, Fulah, Pulaar, Pular;Galician;Gaelic (Scottish);Gaelic (Manx);Georgian;German;Greek;Greenlandic;Guarani;Gujarati;Haitian Creole;Hausa;Hebrew;Herero;Hindi;Hiri Motu;Hungarian;Icelandic;Ido;Igbo;Indonesian;Interlingua;Interlingue;Inuktitut;Inupiak;Irish;Italian;Japanese;Javanese;Kalaallisut, Greenlandic;Kannada;Kanuri;Kashmiri;Kazakh;Khmer;Kikuyu;Kinyarwanda (Rwanda);Kirundi;Kyrgyz;Komi;Kongo;Korean;Kurdish;Kwanyama;Lao;Latin;Latvian (Lettish);Limburgish ( Limburger);Lingala;Lithuanian;Luga-Katanga;Luganda, Ganda;Luxembourgish;Manx;Macedonian;Malagasy;Malay;Malayalam;Maltese;Maori;Marathi;Marshallese;Moldavian;Mongolian;Nauru;Navajo;Ndonga;Northern Ndebele;Nepali;Norwegian;Norwegian bokmål;Norwegian nynorsk;Nuosu;Occitan;Ojibwe;Old Church Slavonic, Old Bulgarian;Oriya;Oromo (Afaan Oromo);Ossetian;P?li;Pashto, Pushto;Persian (Farsi);Polish;Portuguese;Punjabi (Eastern);Quechua;Romansh;Romanian;Russian;Sami;Samoan;Sango;Sanskrit;Serbian;Serbo-Croatian;Sesotho;Setswana;Shona;Sichuan Yi;Sindhi;Sinhalese;Siswati;Slovak;Slovenian;Somali;Southern Ndebele;Spanish;Sundanese;Swahili (Kiswahili);Swati;Swedish;Tagalog;Tahitian;Tajik;Tamil;Tatar;Telugu;Thai;Tibetan;Tigrinya;Tonga;Tsonga;Turkish;Turkmen;Twi;Uyghur;Ukrainian;Urdu;Uzbek;Venda;Vietnamese;Volapük;Wallon;Welsh;Wolof;Western Frisian;Xhosa;Yiddish;Yoruba;Zhuang, Chuang;Zulu",
"ab;aa;af;ak;sq;am;ar;an;hy;as;av;ae;ay;az;bm;ba;eu;be;bn;bh;bi;bs;br;bg;my;ca;ch;ce;ny;zh;zh-Hans;zh-Hant;cv;kw;co;cr;hr;cs;da;dv;nl;dz;en;eo;et;ee;fo;fj;fi;fr;ff;gl;gd;gv;ka;de;el;kl;gn;gu;ht;ha;he;hz;hi;ho;hu;is;io;ig;id, in;ia;ie;iu;ik;ga;it;ja;jv;kl;kn;kr;ks;kk;km;ki;rw;rn;ky;kv;kg;ko;ku;kj;lo;la;lv;li;ln;lt;lu;lg;lb;gv;mk;mg;ms;ml;mt;mi;mr;mh;mo;mn;na;nv;ng;nd;ne;no;nb;nn;ii;oc;oj;cu;or;om;os;pi;ps;fa;pl;pt;pa;qu;rm;ro;ru;se;sm;sg;sa;sr;sh;st;tn;sn;ii;sd;si;ss;sk;sl;so;nr;es;su;sw;ss;sv;tl;ty;tg;ta;tt;te;th;bo;ti;to;ts;tr;tk;tw;ug;uk;ur;uz;ve;vi;vo;wa;cy;wo;fy;xh;yi, ji;yo;za;zu",
false );
--#

CALL Upload_dropDown_Details('include',
"sport,game,movie,cricket",
"sport,game,movie,cricket",
false );
--#
CALL Upload_dropDown_Details('exclude',
"sport,game,movie,cricket,jpg,jpeg,mkv,.ico",
"sport,game,movie,cricket,jpg,jpeg,mkv,.ico",
false );
