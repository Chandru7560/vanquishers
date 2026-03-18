/* =====================================================
   VANQUISHERS - User Seed Script
   Generates data/users.json with bcrypt-hashed passwords
   Run once: node seed-users.js
   ===================================================== */

const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const SALT_ROUNDS = 10;

// Raw user data: [username, password, email, role, batchYear, displayName]
const rawUsers = [
    // Admin & Viewer
    ['admin', 'vanquishers2024', 'vanquisherstce@gmail.com', 'admin', null, 'Admin'],
    ['viewer', 'viewer2024', '', 'viewer', null, 'Viewer'],

    // Batch 2010
    ['karthik_10', 'kart2010', 'kartheelc04@gmail.com', 'player', 2010, 'Karthik'],
    ['kamaraj_10', 'kama2010', 'kamaraj88salem@gmail.com', 'player', 2010, 'Kamaraj'],

    // Batch 2011
    ['muthu_kumar_11', 'muth2011', 'iminon17@gmail.com', 'player', 2011, 'Muthu'],
    ['yashwanth_11', 'yash2011', 'cl.yashwanth@gmail.com', 'player', 2011, 'Yashwanth'],
    ['arun_kumar_11', 'arun2011', 'arunmechtce@gmail.com', 'player', 2011, 'Arun'],

    // Batch 2012
    ['ram_12', 'ram2012', 'ramrbkv@gmail.com', 'player', 2012, 'Ram'],
    ['vijayendran_12', 'vija2012', 'vijayendrangk@gmail.com', 'player', 2012, 'Vijayendran'],
    ['hariharasudhan_12', 'hari2012', 'sudhahariharasudhan@gmail.com', 'player', 2012, 'Hariharasudhan'],

    // Batch 2013
    ['siva_13', 'siva2013', 'sivanarayannn@gmail.com', 'player', 2013, 'Siva'],
    ['prem_13', 'prem2013', 'Premkumar22ece@gmail.com', 'player', 2013, 'Prem'],
    ['aravinthakumar_13', 'arav2013', 'kumararavinth020@gmail.com', 'player', 2013, 'Aravinth'],
    ['rajavel_13', 'raja2013', 'mrsvel7@gmail.com', 'player', 2013, 'Rajavel'],
    ['alex_13', 'alex2013', 'tcealex@gmail.com', 'player', 2013, 'Alex'],
    ['muthu_alagappan_13', 'muth2013', 'muthalagappan.n@gmail.com', 'player', 2013, 'Muthu Alagappan'],

    // Batch 2014
    ['vigneshwaran_14', 'vign2014', 'vigneshmechtce@gmail.com', 'player', 2014, 'Vignesh'],
    ['vijayan_14', 'vija2014', 'vijayan1993@gmail.com', 'player', 2014, 'Vijayan'],
    ['aravindh_prasad_14', 'arav2014', 'arvindprasadtce@gmail.com', 'player', 2014, 'Aravinth Prasadth'],
    ['durga_prasad_14', 'durg2014', 'prasad.durga025@gmail.com', 'player', 2014, 'Durga Prasadh'],
    ['aravindhan_14', 'arav2014', 'Aravindhan443@gmail.com', 'player', 2014, 'Aravinthan'],
    ['vinoth_kanna_14', 'vino2014', 'prpvinothkanna@gmail.com', 'player', 2014, 'Vinoth'],

    // Batch 2015
    ['srinivasan_15', 'sree2015', 'frisksri@gmail.com', 'player', 2015, 'Sreeni'],
    ['ameesh_15', 'amee2015', 'ameeshsrinivasan@gmail.com', 'player', 2015, 'Ameesh'],
    ['karthi_15', 'kart2015', 'Karthiktvnk@gmail.com', 'player', 2015, 'Karthi'],
    ['senthilkumar_15', 'sent2015', 'ktsenthil2012@gmail.com', 'player', 2015, 'Senthil'],
    ['premkumar_15', 'prem2015', 'premkumar116012@gmail.com', 'player', 2015, 'Prem Kumar'],
    ['blessto_15', 'bles2015', 'bblessto@gmail.com', 'player', 2015, 'Blessto'],

    // Batch 2016
    ['dhineshkumar_16', 'dhin2016', 'dineshjagan005@gmail.com', 'player', 2016, 'Dhinesh'],
    ['sugumar_16', 'sugu2016', 'sugumarsurya83@gmail.com', 'player', 2016, 'Sugumar'],
    ['mugilan_16', 'mugi2016', 'sampathmukil@gmail.com', 'player', 2016, 'Mugilan'],

    // Batch 2017
    ['logesh_17', 'loge2017', 'gjayavarsan@gmail.com', 'player', 2017, 'Logesh'],
    ['puvi_17', 'puvi2017', 'puviyarasuvelu@gmail.com', 'player', 2017, 'Puvi'],
    ['naveen_17', 'nave2017', 'v.naveenkvp@gmail.com', 'player', 2017, 'Naveen'],
    ['godwin_17', 'godw2017', 'godwinkennady96@gmail.com', 'player', 2017, 'Godwin'],
    ['seetha_17', 'seet2017', 'ram07.it@gmail.com', 'player', 2017, 'Seetha'],
    ['kumaresan_17', 'kuma2017', 'kumaresantceit@gmail.com', 'player', 2017, 'Kumaresan'],
    ['praveen_17', 'prav2017', 'praveenfromtce@gmail.com', 'player', 2017, 'Praveen'],

    // Batch 2018
    ['vignesh_perumal_18', 'vick2018', 'vigneshperumal86@gmail.com', 'player', 2018, 'Vicky'],
    ['antony_raj_18', 'anto2018', 'antony1981996@gmail.com', 'player', 2018, 'Antony'],
    ['tamilselvan_18', 'tami2018', 'sachintamil108@gmail.com', 'player', 2018, 'Tamil'],
    ['hariharan_18', 'hari2018', 'harisolai@gmail.com', 'player', 2018, 'Hari'],
    ['rahman_18', 'rahm2018', 'fazulur8@gmail.com', 'player', 2018, 'Rahman'],

    // Batch 2019
    ['avinash_19', 'avin2019', 'avinashdurairajan@gmail.com', 'player', 2019, 'Avinash'],
    ['ananth_19', 'aana2019', 'anandhstanlyjohnson@gmail.com', 'player', 2019, 'Aanath'],
    ['vijay_19', 'vija2019', 'vijay1998boopathi@gmail.com', 'player', 2019, 'Vijay'],
    ['bala_harish_19', 'bala2019', 'balaharish777@gmail.com', 'player', 2019, 'Bala Haraish'],
    ['praveen_19', 'prav2019', 'sspraveen1997@gmail.com', 'player', 2019, 'Praveen'],
    ['mani_19', 'mani2019', 'manirakshithrm@gmail.com', 'player', 2019, 'Mani'],

    // Batch 2020
    ['siva_ramkumar_20', 'siva2020', 'sivaramkumara1999@gmail.com', 'player', 2020, 'Siva'],
    ['bharathan_20', 'bhar2020', 'vbharathan1999@gmail.com', 'player', 2020, 'Bharathan'],
    ['ashokamannan_20', 'asho2020', 'ashokamannan@gmail.com', 'player', 2020, 'Ashok'],
    ['jagadeeshan_20', 'jaga2020', 'jjegadeesh98@gmail.com', 'player', 2020, 'Jagadheesh'],
    ['harikrishna_20', 'hari2020', 'vnhari98@gmail.com', 'player', 2020, 'Hari'],
    ['saravana_kumar_20', 'sara2020', 'saravanasampath554@gmail.com', 'player', 2020, 'Saravana'],

    // Batch 2021
    ['mayil_raj_21', 'mayi2021', 'mayilsmpselvam@gmail.com', 'player', 2021, 'Mayil Raj'],
    ['ram_prasanth_21', 'ramp2021', 'ramprasanthram312@gmail.com', 'player', 2021, 'Ram Prasanth'],
    ['pradeep_kumar_21', 'prad2021', 'pradeepkumar44683@gmail.com', 'player', 2021, 'Pradeep Kumar'],
    ['vigneshwaran_21', 'vign2021', 'vigneshwaranvw493@gmail.com', 'player', 2021, 'Vignesh'],
    ['karthikeyan_21', 'kart2021', 'karthipandarinathan@gmail.com', 'player', 2021, 'Karthikeyan'],
    ['udhaya_kumar_21', 'udha2021', 'udhayakumarthiagaajar@gmail.com', 'player', 2021, 'Udhaya Kumar'],
    ['warun_kumar_21', 'wara2021', 'warunkumarb@gmail.com', 'player', 2021, 'Waran Kumar'],
    ['keerthinathan_21', 'keer2021', 'jkeerthinathan@gmail.com', 'player', 2021, 'Keerthinathan'],

    // Batch 2022
    ['arun_karthick_22', 'arun2022', 'arunmuthuraman0407@gmail.com', 'player', 2022, 'Arun'],
    ['ramkumar_22', 'ramk2022', 'ramkumarp133@gmail.com', 'player', 2022, 'Ramkumar'],
    ['anbumani_22', 'anbu2022', 'tanbumani1402@gmail.com', 'player', 2022, 'Anbumani'],
    ['dharbanesh_22', 'dhar2022', 'dharbanesh22@gmail.com', 'player', 2022, 'Dharbanesh'],
    ['kathir_aadhiseshan_22', 'kath2022', 'kathiraadhiseshan@gmail.com', 'player', 2022, 'Kathir'],

    // Batch 2023
    ['prasanth_23', 'pras2023', 'jkprasanthbe@gmail.com', 'player', 2023, 'Prashanth'],
    ['hari_hara_priyan_23', 'hari2023', 'hariharapriyans@gmail.com', 'player', 2023, 'Hari Hara Priyan'],
    ['surya_23', 'sury2023', 'suryajm001@gmail.com', 'player', 2023, 'Surya'],
    ['ashin_glads_mon_23', 'ashi2023', 'aashinmechon@gmail.com', 'player', 2023, 'Ashin'],
    ['vignesh_kumar_23', 'vign2023', 'vigneshkumarr1612@gmail.com', 'player', 2023, 'Vignesh'],
    ['mohan_23', 'moha2023', 'tirupathimohan8@gmail.com', 'player', 2023, 'Mohan'],
    ['kishore_kumar_23', 'kish2023', 'Kishore2002kumaar@gmail.com', 'player', 2023, 'Kishore'],
    ['murali_manohar_23', 'mura2023', 'muralemanoharm@gmail.com', 'player', 2023, 'Murali Manohar'],
    ['logeshwaran_23', 'loge2023', 'logeshwaran.r.ds@gmail.com', 'player', 2023, 'Logesh'],

    // Batch 2024 (Dinesh Kumar has no email - excluded)
    ['hemachandran_24', 'hema2024', 'hemuragu498@gmail.com', 'player', 2024, 'Hemachandran'],
    ['ram_sabarish_24', 'rams2024', 'jkrramsabarish@gmail.com', 'player', 2024, 'Ram Sabarish'],
    ['mvsraja_24', 'mvsr2024', 'mvsrajaofficial@gmail.com', 'player', 2024, 'Mvs Raja'],

    // Batch 2025
    ['varun_25', 'varu2025', 'subavarun129@gmail.com', 'player', 2025, 'Varun'],
    ['hemachandran_25', 'hema2025', 'gmhemanth2003@gmail.com', 'player', 2025, 'Hemachandran G M'],
    ['thanus_karthick_25', 'than2025', 'thanuskarthik.gb@gmail.com', 'player', 2025, 'Thanus'],
    ['aswin_25', 'ashw2025', 'aswinmayakkannu@gmail.com', 'player', 2025, 'Aswin'],
    ['sanjay_nithish_25', 'sanj2025', 'sanjay24112003@gmail.com', 'player', 2025, 'Sanjay'],

    // Batch 2026
    ['sampath_26', 'samp2026', 'sampathvq2k26@gmail.com', 'player', 2026, 'Sampath'],
    ['vignesh_26', 'vign2026', 'vickykarthi369@gmail.com', 'player', 2026, 'Vignesh'],
    ['bharani_dharan_26', 'bhar2026', 'bharanitvm2004@gmail.com', 'player', 2026, 'Bharani'],
    ['jenson_26', 'jens2026', 'jensonjenson779@gmail.com', 'player', 2026, 'Jenson'],

    // Batch 2027
    ['rajesh_kumar_27', 'raje2027', 'garajeshkumar2005@gmail.com', 'player', 2027, 'Rajesh'],
    ['muthu_27', 'muth2027', 'muthusivanesan2005@gmail.com', 'player', 2027, 'Muthu'],
    ['naveen_27', 'nave2027', 'udhayanaveen000@gmail.com', 'player', 2027, 'Naveen'],
    ['chandru_27', 'chan2027', 'chandru637937@gmail.com', 'player', 2027, 'Chandru'],

    // Batch 2028
    ['kasi_annamalai_28', 'kasi2028', 'annamalaikasi2@gmail.com', 'player', 2028, 'Kasi Annamalai'],
    ['kannan_28', 'kann2028', 'dgkannan2007@gmail.com', 'player', 2028, 'Kannan'],
    ['santhosh_28', 'sant2028', 'santhosh220671@gmail.com', 'player', 2028, 'Santhosh'],
    ['ganapathy_sundar_28', 'gana2028', 'ganapathyramasamy2006@gmail.com', 'player', 2028, 'Ganapathy'],
    ['sriram_28', 'srir2028', 'jksriramsundar27052007@gmail.com', 'player', 2028, 'Sriram'],
    ['navaneesh_28', 'nava2028', 'navaneesh2006@gmail.com', 'player', 2028, 'Navaneesh'],

    // Batch 2029
    ['somesh_29', 'some2029', 'someshrp17@gmail.com', 'player', 2029, 'Somesh'],
    ['ramakrishnan_29', 'rama2029', 'rasigaranr147@gmail.com', 'player', 2029, 'Ramakrishnan'],
    ['dhavamani_29', 'dhav2029', 'dhavamanichinnasamy2008@gmail.com', 'player', 2029, 'Dhavamani'],
    ['sakthi_29', 'sakt2029', 'sakthi301226@gmail.com', 'player', 2029, 'Sakthi'],
    ['Bala_29', 'bala2029', '', 'player', 2029, 'Bala Narain']
];

async function seedUsers() {
    console.log('Seeding users with bcrypt hashed passwords...');
    const users = [];

    for (const [username, password, email, role, batchYear, displayName] of rawUsers) {
        const hash = await bcrypt.hash(password, SALT_ROUNDS);
        users.push({
            username,
            password: hash,
            email: email || '',
            role,
            batchYear,
            displayName
        });
        process.stdout.write('.');
    }

    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    fs.writeFileSync(
        path.join(dataDir, 'users.json'),
        JSON.stringify(users, null, 2),
        'utf8'
    );

    console.log(`\nGenerated ${users.length} users in data/users.json`);
}

seedUsers().catch(console.error);
