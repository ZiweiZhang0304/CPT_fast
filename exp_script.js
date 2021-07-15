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
    str = setCharAt(str, 56, 'w');
    return str
};

function countItems(arr, what){
    var count= 0, i;
    while((i= arr.indexOf(what, i))!= -1){
        ++count;
        ++i;
    }
    return count
}

function isConsecutive(a){

  let visited = {};
  if((a[a.length - 1] - a[0]) + 1 != a.length){
   return false;
  }
  for(let i = 0; i < a.length; i++){
    if(visited[a[i]] == 1){
      return false;
    }else{
      visited[a[i]] = 1;
    }
    return true;
  }
}

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
        '<br>\n' +
        'During the study, you will encounter rocks and fish fossils. <br>\n' +
        '    </p>',

        /* -----instr_2----- */
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
        'Now you will do a short practice of the game.<br>\n' +
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
for (i = 0; i < 1020; i++) { //1080
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
for (i = 0; i < 180; i++) {//120

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


    if (stimuli.at_stimulus.charAt(51) == 's') {
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


    if (stimuli_prac.at_stimulus_prac.charAt(51) == 's') {
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
            trial_duration: 600,
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
                    } else { var fix_duration = 600 - (jsPsych.data.get().filter({ TaskType: 'prac' }).last(1).select('rt').values[0]); };
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
        /* -----instr_9----- */
        '<p style="color:black;font-size:26px">\n' +
        '\n' +
        '    Thank you for practicing the game! <br>\n' +
        '<br>\n' +
        '    Every time you see a stone or a fish fossil, please respond as accurately as you can. <br>\n' +
        '<br>\n' +
        '    It is very important that you do your best. <br>\n' +
        '<br>\n' +
        '<p style="color:black;font-size: 26px">\n' +
        '        Please DO NOT quit or refresh the webpage. <br>\n' +
        '        Unfortunately, we are unable to accept your HIT if you exit out of the page or refresh it.<br>\n' +
        '        Now, click on "Next" to start the main experiment. <br> \n' +
        '</p> <br>'
    ],
    show_clickable_nav: true,
}
timeline.push(instruction2);





/* ----- CPT -----*/
var attention = {
  timeline:[
  {type: "image-keyboard-response",
  stimulus: jsPsych.timelineVariable('at_stimulus'),
  choices: ['space'],
  data: jsPsych.timelineVariable('data'),
  trial_duration: 600,
  on_finish: function(data){

    var at_counter = jsPsych.data.get().filter({TaskType: 'at'}).select('rt').values.length;
/*    var lr_counter = jsPsych.data.get().filterCustom(function(trial){
    return isNaN(trial.diff) == false;
    }).count()*/
    var slow_lr_counter = jsPsych.data.get().filter({diff: 'slow'}).count() //jsPsych.data.get().filter({diff: 'slow'}).length
    var fast_lr_counter = jsPsych.data.get().filter({diff: 'fast'}).count()
    var lr_counter =slow_lr_counter + fast_lr_counter

    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    var rt_mean = jsPsych.data.get().filter({ at_TrialType: 'frequent', key_press: 32}).select('rt').mean(); //if you change response key, don't forget to search for key code
    var rt_sd = jsPsych.data.get().filter({at_TrialType: 'frequent', key_press: 32}).select('rt').sd();

    data.at_counter = at_counter
    console.log(at_counter)
    data.lr_counter = lr_counter
    data.slow_lr_counter = slow_lr_counter
    data.fast_lr_counter = fast_lr_counter
    console.log('learning trial number: ' + lr_counter)
    console.log('fast learning trial number: ' + fast_lr_counter)
    console.log('slow learning trial number: ' + slow_lr_counter)

    data.at_RunningMean = rt_mean
    data.sd = rt_sd
    data.slow = rt_mean + 1*rt_sd
    data.fast = Math.abs(rt_mean - 1*rt_sd)


    if (at_counter > 3) {
        //see if the last trial was an infrequent trial
        var last_infreq = jsPsych.data.get().filter({TaskType: 'at'}).last(3).select('at_TrialType').values;
        if (last_infreq.includes('infrequent') == true) {
        console.log('there is an infreq')}

        //see if there was an error in the last 3 trials
        var last_correct = jsPsych.data.get().filter({ TaskType: 'at' }).last(3).select('correct').values;
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



        //calculate trailing RT after the third trial
        var rt_three = jsPsych.data.get().filter({at_TrialType: 'frequent'}).last(3).select('rt').mean();
        data.at_TrailingMean = rt_three
        console.log(jsPsych.data.get().filter({ TaskType: 'at' }).last(1).select('rt').values[0])

  };


/* ----new restriction 1 starts here---- */
    //restriction 1 where the last three trials were all fast/slow then the next one can't be the same: || last_fast == false || last_slow == false
    if (at_counter > 10 && lr_counter > 0){//at_counter > 80 && lr_counter >= 6
        console.log('----new restriction 1 starts here----')

        if (lr_counter > 3) {
        var last_lr = jsPsych.data.get().filterCustom(function(data){
            var last = data.diff.last(3).values
            return last});
        console.log(last_lr, typeof last_lr)
        if (last_lr.includes(true)) {
        console.log('there is a trig trial')
        }
    };


        //see if the last 3 lr trials were all fast, if so the next one can't be
        if (fast_lr_counter >=3 ) {
            var last_lr_fast = jsPsych.data.get().filter({ diff: 'fast' }).last(3).select('lr_counter').values;
            console.log(last_lr_fast)
            console.log('lr_counter for fast trials: ' + last_lr_fast)
            console.log('max for last fast trials: ' + Math.max(...last_lr_fast), Math.max(...last_lr_fast)+1)


            // if lr_counter number are not consecutive, it means that they are not in a 3 cluster,
            if (isConsecutive(last_lr_fast)) {
                if (lr_counter == Math.max(...last_lr_fast) + 1) {
                    last_fast = false}
                else (last_fast = true)
            } else {
                last_fast = true
            }
            console.log('can we trigger fast next? ' + last_fast)
        } else {
            console.log('less than 3 fast trials');
            last_fast = true
        }


        //see if the last 3 lr trials were all slow, if so the next one can't be
        if (slow_lr_counter >=3 ) {
            var last_lr_slow = jsPsych.data.get().filter({diff: 'slow'}).last(3).select('lr_counter').values;
            console.log(last_lr_slow)
            console.log('lr_counter for slow trials: ' + last_lr_slow)
            console.log('max for last slow trials: ' + Math.max(...last_lr_slow), Math.max(...last_lr_slow)+1)

            // if lr_counter number are not consecutive, it means that they are not in a 3 cluster,
            if (isConsecutive(last_lr_slow)) {
                if (lr_counter == Math.max(...last_lr_slow) + 1) {
                    last_slow = false}
                else (last_slow = true)
            } else {
                last_slow = true
            }
        console.log('can we trigger slow next? ' + last_slow)
        } else {
            console.log('less than 3 slow trials');
            last_slow = true
        }
      };

    /* ----new restriction 2 starts here---- */
    //restriction 2 where in first 6, s fast 3 slow: ||initial_slow == false || initial_fast == false
    if ( 0< lr_counter && lr_counter <= 6 ) {
        console.log('----new restriction 2 starts here----')
        // check how many fast and how many slow have already been encountered
        console.log('here is initial learning trial: ' + lr_counter)
        var initial = jsPsych.data.get().filter({ test_part: 'test' }).select('diff').values
        //console.log(initial)

        var initial_fast_count = countItems(initial, 'fast')
        //console.log('there are ' + initial_fast_count + 'fast in the first 6 trials')
        var initial_slow_count = countItems(initial, 'slow')
        //console.log('there are ' + initial_slow_count + 'slow in the first 6 trials')

        // if there's 0, 1, 2 slow, slow can happen; if there's 3 slow, then don't trigger even reaching a slow threshold
        if (initial_fast_count < 3) {
            initial_fast = true
        } else {
            initial_fast = false
        }

        // if there's 0, 1, 2 fast, fast can happen; if there's 3 fast, then don't trigger even reaching a fast threshold
        if (initial_slow_count < 3) {
            initial_slow = true
        } else {
            initial_slow = false
        };

      }  else {console.log('no learing yet or more than 6 learning trials')};


    /*---- Start appying restrictions to triggering ----*/

    /*-- If attention <= 80 --*/
    if (at_counter <= 10 ||
        last_infreq.includes('infrequent') ||
        last_correct.includes(false)) //check if last_lr is undefined last_lr == null
    {lr_node = 0 }//change to 80th trial later}

    else if ( last_lr!=null && last_lr.includes(true))  {lr_node = 0 }

    else if (at_counter > 10 && lr_counter > 0 && lr_counter < 6){


      /*-- If attention > 80 && 0< learning <=6 --*/
      if(rt_three > rt_mean+ rt_sd && initial_slow == true)
      {
            data.diff = 'slow'
            console.log('slow')
          } else if (rt_three < Math.abs(rt_mean- rt_sd) && initial_fast == true)
          {
                data.diff = 'fast'
                console.log('fast')
            }
            else {lr_node = 0}
      }

    else if (at_counter > 10 && lr_counter >= 6){


      /*-- If attention > 80 && learning > 6 --*/
      if(rt_three > rt_mean+ rt_sd && last_slow == true)
      {
            data.diff = 'slow'
            console.log('slow')
          } else if (rt_three < Math.abs(rt_mean- rt_sd) && last_fast == true)
          {
                data.diff = 'fast'
                console.log('fast')
            }
            else {lr_node = 0}

    }

    /*-- If attention > 80 && learning = 0 --*/
    else if (at_counter > 10 && lr_counter == 0) {
        if(rt_three > rt_mean+ rt_sd) {
            data.diff = 'slow'
            console.log('slow')
          } else if (rt_three < Math.abs(rt_mean- rt_sd))
          {
                data.diff = 'fast'
                console.log('fast')
            }
            else {lr_node = 0}};
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

