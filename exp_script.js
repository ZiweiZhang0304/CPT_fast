var task_name = "CPT_fast";
var sbj_id = "test01";

//you must put your save_data php url here.
var save_url = "https://users.rcc.uchicago.edu/~zz112/exp_data/save_data.php";
var data_dir = task_name;

//my preference is to include the task and sbj_id in the file name
var file_name = task_name + '_' + sbj_id; 

var repo_site = "https://ziweizhang0304.github.io/CPT_fast/";

var timeline = [];


/* -----Functions-----*/
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
};

function rep(str) {
    str = setCharAt(str, 65, 'w');
    return str
};

var enter_full = {
  type: 'fullscreen',
  fullscreen_mode: true
};
timeline.push(enter_full);


/* -----Give consent-----*/
var check_consent = function(elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

var consent = {
  type: 'external-html',
  url: repo_site + "content/consent.html",
  cont_fn: check_consent,
  cont_btn: 'start',
};
timeline.push(consent);

/* -----ITI----- */

var iti_200 = {
  type: "image-keyboard-response",
  stimulus: repo_site + "img/Stim/gray_bdot.png",
  choices: jsPsych.NO_KEYS,
  trial_duration: 200,
}

/* -----Preload Images----- */
preload_list = [
repo_site +'img/Stim/fixation.png', repo_site + 'img/Stim/fi01_b.png', repo_site + 'img/Stim/fi02_b.png',
repo_site + 'img/Stim/fi03_b.png', repo_site + 'img/Stim/fi04_b.png', repo_site + 'img/Stim/fi01_w.png',
repo_site + 'img/Stim/fi02_w.png', repo_site + 'img/Stim/fi03_w.png', repo_site + 'img/Stim/fi04_w.png',
repo_site + 'img/Stim/fi05_b.png', repo_site + 'img/Stim/fi06_b.png', repo_site + 'img/Stim/fi07_b.png',
repo_site + 'img/Stim/fi08_b.png', repo_site + 'img/Stim/fi05_w.png',
repo_site + 'img/Stim/fi06_w.png', repo_site + 'img/Stim/fi07_w.png', repo_site + 'img/Stim/fi08_w.png',
repo_site + 'img/Stim/st01_b.png', repo_site + 'img/Stim/st02_b.png' , repo_site + 'img/Stim/st03_b.png',
repo_site + 'img/Stim/st04_b.png', repo_site + 'img/Stim/st05_b.png', repo_site + 'img/Stim/st06_b.png',
repo_site + 'img/Stim/st07_b.png', repo_site + 'img/Stim/st08_b.png', repo_site + 'img/Stim/st09_b.png',
repo_site + 'img/Stim/st10_b.png', repo_site + 'img/Stim/st11_b.png', repo_site + 'img/Stim/st12_b.png',
repo_site + 'img/Stim/st13_b.png', repo_site + 'img/Stim/st14_b.png', repo_site + 'img/Stim/st15_b.png',
repo_site + 'img/Stim/st16_b.png', repo_site + 'img/Stim/st01_w.png', repo_site + 'img/Stim/st02_w.png',
repo_site + 'img/Stim/st03_w.png', repo_site + 'img/Stim/st04_w.png', repo_site + 'img/Stim/st05_w.png',
repo_site + 'img/Stim/st06_w.png', repo_site + 'img/Stim/st07_w.png', repo_site + 'img/Stim/st08_w.png',
repo_site + 'img/Stim/st09_w.png', repo_site + 'img/Stim/st10_w.png', repo_site + 'img/Stim/st11_w.png',
repo_site + 'img/Stim/st12_w.png', repo_site + 'img/Stim/st13_w.png', repo_site + 'img/Stim/st14_w.png',
repo_site + 'img/Stim/st15_w.png', repo_site + 'img/Stim/st16_w.png', repo_site + "img/Stim/fixation.png",
repo_site + "img/Stim/gray_bdot.png", repo_site + 'img/Stim/st1_ex.png', repo_site + 'img/Stim/st3_ex.png',
repo_site + 'img/Stim/fi2_ex.png',
repo_site + 'img/Stim/fi4_ex.png']

/* -----Practice Instructions----- */
var instruction1 = {
    type: 'instructions',
    pages: [
        /* -----instr_1----- */
        '<p style="color:black;font-size:26px">\n' +
        'Welcome to the study! <br>\n' +
        '<br>\n' +
        'Please take a few minutes to read the instructions carefully. <br>\n' +
        'In this game, you are training to become a gemologist—an expert in gemstones. <br>\n' +
        '<br>\n' +
        'During the game, you will discover beautiful gemstones, like these: <br>\n' +
        '   </p>\n' +
        '<br>\n' +
        '   <p>\n' +
        '       <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem01.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem02.png" />\n' +
        '       <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem03.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem04.png" />\n' +
        '<br>\n' +
        '    </p>\n' +
        '<br>\n' +
        '    </p>',

        /* -----instr_2----- */
        '<p style="color:black;font-size:26px">\n' +
        'However, as you can imagine, gemstones are rare! <br>\n' +
        'Most of the time you will be digging through rocks and fish fossils.<br>\n' +
        '</p>\n' +
        '    <br>\n' +
        '<p style="color:black;font-size:26px">\n' +
        'Fish fossils look like this: <br>\n' +
        '</p>\n' +

        '<p>\n' +
        '       <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/fi2_ex.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/fi4_ex.png" /><br>\n' +
        '\n' +
        '    </p>\n' +

        '    <br>\n' +

        '<p style="color:black;font-size:26px">\n' +
        'Rocks look like this: <br>\n' +
        '</p>\n' +

        '<p>\n' +
        '       <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/st3_ex.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/st1_ex.png" />\n' +
        '\n' +
        '    </p>\n' +
        '        <br>\n' +

        '<p style="color:black;font-size:26px">\n' +
        'When you encounter rocks, press the <span style="font-size: 26px"><b><kbd>SPACEBAR</kbd></b></span> on your keyboard.<br>\n' +
        '<br>\n' +
        'However, you should avoid fish fossils by not touching them. <br>\n' +
        'So, when you encounter fish fossils, you should <span style="font-size: 26px"><b>NOT</b></span> press any key on your keyboard.<br>\n' +
        'The rocks and fish fossils will go by quickly. <br>\n' +
        '<br>\n' +
        'Please try your best to press the <span style="font-size: 26px"><b><kbd>SPACEBAR</kbd></b></span> whenever you see a rock, <br>\n' +
        'and <span style="font-size: 26px"><b>NOT</b></span> to press anything when you see a fish fossil. <br>\n' +
        '    </p>',

        /* -----instr_3----- */
        '<p style="color:black;font-size:26px">\n' +
        'Now you will do a short practice of this part of the game.<br>\n' +
        '<br>\n' +
        'Remember, press <span style="font-size: 26px"><b><kbd>SPACEBAR</kbd></b></span> when you encounter rocks <br>\n' +
        'and do <span style="font-size: 26px"><b>NOT</b></span> press anything when you encounter fish fossils.<br>\n' +
        '<br>\n' +
        'Note that you will see feedback on your performance during this practice <br>\n' +
        'but not during the real game.<br>\n' +
        '<br>\n' +
        'Now, click on "Next" to start the practice. <br> \n' +
        '</p> <br>'
    ],
    show_clickable_nav: true,
}
timeline.push(instruction1);


// Attention practice stim
var stim_names_freq = ["img/Stim/st01_b.png", "img/Stim/st02_b.png", "img/Stim/st03_b.png", "img/Stim/st04_b.png", "img/Stim/st05_b.png", "img/Stim/st06_b.png"
, "img/Stim/st07_b.png", "img/Stim/st08_b.png","img/Stim/st09_b.png", "img/Stim/st10_b.png", "img/Stim/st11_b.png", "img/Stim/st12_b.png", "img/Stim/st13_b.png",
"img/Stim/st14_b.png", "img/Stim/st15_b.png", "img/Stim/st16_b.png"]
var stim_names_infreq = ["img/Stim/fi01.png", "img/Stim/fi02.png", "img/Stim/fi03.png", "img/Stim/fi04.png", "img/Stim/fi05.png", "img/Stim/fi06.png"
, "img/Stim/fi07.png", "img/Stim/fi08.png"]


var at_stimuli = []
var prac_stimuli = []
var repetition = []
for (i = 0; i < 1080; i++) { //1080
    //var stimuli = new Object();
    stimuli_freq = stim_names_freq[Math.floor((Math.random()) * stim_names_freq.length)];
    repetition.push(String(stimuli_freq.charAt(9)) + String(stimuli_freq.charAt(10)) + String(stimuli_freq.charAt(11)) + String(stimuli_freq.charAt(12)) );


    if (i != 0) {

        while (repetition[i] == repetition[i - 1]) {
            stimuli_freq = stim_names_freq[Math.floor((Math.random()) * stim_names_freq.length)];
            repetition[i] = (String(stimuli_freq.charAt(9)) + String(stimuli_freq.charAt(10)) + String(stimuli_freq.charAt(11)) + String(stimuli_freq.charAt(12)) );
            if (repetition[i] != repetition[i - 1]) { break };
        }
    }

}
console.log(repetition)

var repetition_1 = []
for (i = 0; i < 120; i++) {//120

    stimuli_infreq = stim_names_infreq[Math.floor((Math.random()) * stim_names_infreq.length)];
    repetition_1.push(String(stimuli_infreq.charAt(9)) + String(stimuli_infreq.charAt(10)) + String(stimuli_infreq.charAt(11)) + String(stimuli_infreq.charAt(12)) );


    if (i != 0) {

        while (repetition_1[i] == repetition_1[i - 1]) {
            stimuli_infreq = stim_names_infreq[Math.floor((Math.random()) * stim_names_infreq.length)];
            repetition_1[i] = (String(stimuli_infreq.charAt(9)) + String(stimuli_infreq.charAt(10)) + String(stimuli_infreq.charAt(11)) + String(stimuli_infreq.charAt(12)) );
            if (repetition_1[i] != repetition_1[i - 1]) { break };
        }
    }

}


/* ----- Selecting Stim for Practice----- */
for (i = 0; i < repetition_1.length; i++) {
    repetition.splice(Math.floor((Math.random() * repetition.length)), 0, repetition_1[i]);
};

var repetition_1_prac = repetition_1.slice(0, 2);
var repetition_prac = repetition.slice(0, 8);

for (i = 0; i < repetition_1_prac.length; i++) {
    repetition_prac.splice(Math.floor((Math.random() * repetition_prac.length)), 0, repetition_1_prac[i]);
}

for (j = 0; j < repetition.length; j++) {
    var stimuli = new Object();
    stimuli.at_stimulus = repo_site + 'img/Stim/' + repetition[j] + '_b.png';

    stimuli.data = new Object();


    if (stimuli.at_stimulus.charAt(60) == 's') {
        stimuli.data.at_TrialType = 'frequent';
        stimuli.data.correct_response = 'space'
    } else {
        stimuli.data.at_TrialType = 'infrequent';
        stimuli.data.correct_response = ''
    }
    stimuli.at_fix = rep(stimuli.at_stimulus);

    stimuli.data.test_part = 'test';
    stimuli.data.TaskType = 'at';

    at_stimuli.push(stimuli);

}


for (j = 0; j < repetition_prac.length; j++) {
    var stimuli_prac = new Object();
    stimuli_prac.at_stimulus_prac = repo_site + 'img/Stim/' + repetition_prac[j] + '_b.png';

    stimuli_prac.data = new Object();


    if (stimuli_prac.at_stimulus_prac.charAt(60) == 's') {
        stimuli_prac.data.at_TrialType = 'frequent';
        stimuli_prac.data.correct_response = 'space'
    } else {
        stimuli_prac.data.at_TrialType = 'infrequent';
        stimuli_prac.data.correct_response = ''
    }
    stimuli_prac.at_fix = rep(stimuli_prac.at_stimulus_prac);

    stimuli_prac.data.test_part = 'prac';
    stimuli_prac.data.TaskType = 'prac';
    prac_stimuli.push(stimuli_prac);
}


var prac = {
    timeline: [
        {
            type: "image-keyboard-response",
            stimulus:jsPsych.timelineVariable('at_stimulus_prac'),
            choices: ['space'],
            data: jsPsych.timelineVariable('data'),
            trial_duration: 800,
            on_finish: function (data) {
                data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
            }
        },

        {
            type: "image-keyboard-response",
            stimulus: jsPsych.timelineVariable('at_fix'),
            choices: jsPsych.NO_KEYS,
            response_ends_trial: false,
            trial_duration:function(data) {
                    if (jsPsych.data.get().filter({ TaskType: 'prac' }).last(1).select('rt').values[0] == null) {
                        var fix_duration = 0
                    } else { var fix_duration = 800 - (jsPsych.data.get().filter({ TaskType: 'prac' }).last(1).select('rt').values[0]); };
                    return fix_duration
                }
        }],
};

var prac_feedback = {
    type: 'html-keyboard-response',
    stimulus: function () {
        var last_trial_correct = jsPsych.data.get().filter({ TaskType: 'prac' }).last(1).values()[0].correct;
        if (last_trial_correct) {
            return '<p style="color:black"> Correct!</p>'
        } else {
            return '<p style="color:black"> Incorrect.</p>'
        }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
};

var prac_block = {
    timeline: [prac, prac_feedback, iti_200],
    timeline_variables: prac_stimuli,
    randomize_order: false,
    repetitions: 1
}
timeline.push(prac_block)

var debrief = {
    type: "html-keyboard-response",
    stimulus: function () {

        var trials = jsPsych.data.get().filter({ test_part: 'prac' });
        var correct_trials = trials.filter({ correct: true });
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        return "<p>You responded correctly on " + accuracy + "% of the trials.</p>" +
            "<p>Remember that you should respond as accurately as possible. Press any key to move on.</p>";

    }
};
timeline.push(debrief);



/* -----Main Instructions----- */
var instruction2 = {
    type: 'instructions',
    pages: [
        /* -----instr_4----- */
        '<p style="color:black;font-size:26px">\n' +
        'Thank you for practicing this part of the game! <br>\n' +
        'Now we will go through some other rules of the Gemstone Expedition.<br>\n' +
        '<br>\n' +
        'While digging through rocks and fish fossils, sometimes you will get lucky and find a gemstone. <br>\n' +
        'When you find a gem, your job is to identify where the gem came from by pressing a button on your keyboard. <br>\n' +
        '<br>\n' +
        'You will get positive feedback for correctly identifying where the gem came from! <br>\n' +
        'You do not get positive feedback for incorrectly identified gems.<br>\n' +
        '<br>\n' +
        '</p>',

        /* -----instr_5----- */
        '<p style="color:black;font-size:26px">\n' +
        '    You’ll encounter gemstones in two different locations: <br>\n' +
        '    a faraway mountain and a deserted road, like this:\n' +
        '</p>\n' +
        '<br>\n' +
        '     <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/TS232_ex.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/TS110_ex.png" />\n' +
        '<br>\n' +
        '\n' +
        '<p style="color:black;font-size:26px">\n' +
        '\n' +
        '        When you are on the mountain, indicate whether the gem came from <br>\n' +
        '        the top of the mountain by pressing the <span style="font-size: 26px"><b><kbd>Up</kbd></b></span> arrow key <br>\n' +
        '        or the bottom of the mountain by pressing the <span style="font-size: 26px"><b><kbd>Down</kbd></b></span> arrow key on the keyboard. <br>\n' +
        '        <br>\n' +
        '        When you are on the road, indicate whether the gem originated from <br>\n' +
        '        the left side of the road by pressing the <span style="font-size: 26px"><b><kbd>Left</kbd></b></span> arrow key <br>\n' +
        '        or the right side of the road by pressing the <span style="font-size: 26px"><b><kbd>Right</kbd></b></span> arrow key on the keyboard. <br>\n' +
        '</p>',

        /* -----instr_6----- */
        '<p style="color:black;font-size: 26px">\n' +
        '    Notice that the gemstones come in different cuts: <br>\n' +
        '    sharp-edged (diamond-shaped and cone-shaped) and round (circle and oval). <br>\n' +
        '    <br>\n' +
        '    They also come in different colors: <br>\n' +
        '    warm-toned colors (yellow and orange) and cool-toned colors (light blue and dark blue). <br>\n' +
        '    Like this: <br>\n' +
        '</p>\n' +
        '\n' +
        '    <br>\n' +
        '<p>\n' +
        '\n' +
        '    <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem01.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem03.png" />\n' +
        '    <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem02.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/gem04.png" /><br>\n' +
        '</p>\n' +
        '<br>\n' +
        '<p style="color:black;font-size: 26px">\n' +
        '    This information may be helpful for figuring out where the gems came from.<br>\n' +
        '</p>',

        /* -----instr_7----- */
        '<p style="color:black;font-size: 26px">\n' +
        '    Because you are still a gemologist-in-training,  <br>\n' +
        '    you will have to learn where the gems came from. <br>\n' +
        '    <br>\n' +
        '    There are only two possible responses in each location: <br>\n' +
        '\n' +
        '    <span style="font-size: 26px"><b><kbd>Up</kbd></b></span> or <span style="font-size: 26px"><b><kbd>Down</kbd></b></span> on the mountain, <br>\n' +
        '    and <span style="font-size: 26px"><b><kbd>Left</kbd></b></span> or <span style="font-size: 26px"><b><kbd>Right</kbd></b></span> on the road.<br>\n' +
        '    <br>\n' +
        '    You will learn where different types of gems come from <br>\n' +
        '    based on the feedback you receive after each response. <br>\n' +
        '    <br>\n' +
        '    A <span style="font-size: 26px"><b>+1</b></span> indicates a correct response, and a <span style="font-size: 26px"><b>X</b></span> indicates an incorrect response, like this: <br>\n'+
        '    </p>\n' +
        '    <br>\n' +
        '<p>\n' +
        '    <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/correct_ex.png" /> <img src="https://ziweizhang0304.github.io/Gem_learning_trig/img/Stim/incorrect_ex.png" /><br>\n' +
        '</p>\n' +
        '    <br>\n' +
        '<p style="color:black;font-size:26px">\n' +
        '    Please pay attention to your choice and feedback after you identify a gem so that you can make your future choices wisely.<br>\n' +
        '</p>',

        /* -----instr_8----- */
        '<p style="color:black;font-size:26px">\n' +
        'We will now show you an example of what the complete expedition might look like to help you understand the process better:<br>\n' +
        '<br>\n' +
        'You do not have to do anything here as we go through the video example <br>\n' +
        '<br>\n' +
        'Click on "Next" to see the video example <br>\n' +
        '</p>'
    ],
    show_clickable_nav: true,
}
timeline.push(instruction2);

var instruction3 = {
    type: 'instructions',
    pages: [
        /* -----instr_9----- */
        '<p style="color:black;font-size:26px">\n' +
        '\n' +
        '    Every time you see a stone, a fish fossil or a gem, please respond as accurately as you can. <br>\n' +
        '<br>\n' +
        '    It is very important that you do your best. <br>\n' +
        '<br>\n' +
        '    Although the expedition may seem difficult at first, it should be do-able, especially if you are focused. <br>\n' +
        '</p>\n' +
        '<br>\n' +
        '<p style="color:black;font-size: 26px">\n' +
        '        Please DO NOT quit or refresh the webpage. <br>\n' +
        '        Unfortunately, we are unable to accept your HIT if you exit out of the page or refresh it.<br>\n' +
        '        Now, click on "Next" to start the main experiment. <br> \n' +
        '        <br> Happy exploring!\n' +
        '</p> <br>'
    ],
    show_clickable_nav: true,
}
timeline.push(instruction3);





/* ----- CPT -----*/

var attention = {
  timeline:[
  {type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('at_stimulus'),
  choices: ['space'],
  data: jsPsych.timelineVariable('data'),
  trial_duration: 600,
  on_finish: function(data){

    var at_counter = jsPsych.data.get().filter({TaskType: 'at'}).select('rt').values.length

    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    var rt_mean = jsPsych.data.get().filter({ at_TrialType: 'frequent', key_press: 32}).select('rt').mean(); //if you change response key, don't forget to search for key code
    var rt_sd = jsPsych.data.get().filter({at_TrialType: 'frequent', key_press: 32}).select('rt').sd();

    data.at_counter = at_counter
    console.log(at_counter)

    data.at_RunningMean = rt_mean
    data.sd = rt_sd
    data.slow = rt_mean + 0.8*rt_sd
    data.fast = Math.abs(rt_mean - 0.8*rt_sd)


    if (at_counter > 3) {
        //see if the last trial was an infrequent trial
        var last_infreq = jsPsych.data.get().filter({TaskType: 'at'}).last(3).select('at_TrialType').values;
        if (last_infreq.includes('infrequent') == true) {
        console.log('there is an infreq')}

        //see if there was an error in the last 3 trials
        var last_correct = jsPsych.data.get().filter({ TaskType: 'at' }).last(3).select('correct').values;
        console.log(last_correct)
        if (last_correct.includes(false) == true){
        console.log('there is an error')}

        var last_rt = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').values;

        for (var i = 0; i<3; i++){
         if (last_rt[i] <100) {
           last_rt[i] = true
            }
        };
        if (last_rt.includes(true)) {
         console.log('too fast')};

        var last_lr = jsPsych.data.get().filter({ test_part: 'test' }).last(3).select('TaskType').values;
        if (last_lr.includes('lr')== true) {
            console.log('there is a trig trial')}

        //calculate trailing RT after the third trial
        var rt_three = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').mean();
        data.at_TrailingMean = rt_three
        console.log(jsPsych.data.get().filter({ TaskType: 'at' }).last(1).select('rt').values[0])

  };



    if (at_counter < 80 || last_infreq.includes('infrequent') || last_correct.includes(false) || last_rt.includes(true) || last_lr.includes('lr')){
        lr_node = 0 //80th trial
    }
    else {

      if(rt_three > rt_mean+ 0.8 * rt_sd){
            data.diff = 'slow'
            data.condition = 2
            console.log('slow')
          } else if (rt_three < Math.abs(rt_mean- 0.8 * rt_sd)){
                data.diff = 'fast'
                data.condition = 2
                console.log('fast')
            }
            else {lr_node = 0}
      }
    }
  },


{type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('at_fix'),
  choices: jsPsych.NO_KEYS,
  response_ends_trial: false,
  trial_duration: function (data) {
        if (jsPsych.data.get().filter({ TaskType: 'at' }).last(1).select('rt').values[0] == null) {
            var fix_duration = 0
        } else { var fix_duration = 600 - (jsPsych.data.get().filter({ TaskType: 'at' }).last(1).select('rt').values[0]); };
        return fix_duration
    }
}
],
}




var at_test_procedure = {
  timeline: [attention,iti_200],
  timeline_variables: at_stimuli,
  randomize_order: false,
  repetitions: 1
}
timeline.push(at_test_procedure);


var interaction_data = jsPsych.data.getInteractionData();
jsPsych.data.checks = interaction_data;


function save_data_csv() {
    jQuery.ajax({
        type: 'post',
        cache: false,
        url: save_url,
        data: {
            data_dir: data_dir,
            file_name: file_name + '.csv', // the file type should be added
            exp_data: jsPsych.data.get().csv()
        }
    });
}


jsPsych.init({
    timeline: timeline,
    display_element: 'display_stage',
    preload_images: preload_list,
    on_finish: function () {
        save_data_csv();
    }
});

