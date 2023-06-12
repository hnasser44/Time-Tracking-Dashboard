
const DailyStats = {
    work: {
        hours: 5,
        yesterday: 7,
    },
    play: {
        hours: 1,
        yesterday: 2,
    },
    study: {
        hours: 0,
        yesterday: 1,
    },
    exercise: {
        hours: 1,
        yesterday: 1,
    },
    social: {
        hours: 1,
        yesterday: 3,
    },
    selfCare: {
        hours: 0,
        yesterday: 1,
    }
}

const WeeklyStats = {
    work: {
        hours: 32,
        lastWeek: 36,
    },
    play: {
        hours: 10,
        lastWeek: 8,
    },
    study: {
        hours: 4,
        lastWeek: 7,
    },
    exercise: {
        hours: 4,
        lastWeek: 5,
    },
    social: {
        hours: 5,
        lastWeek: 10,
    },
    selfCare: {
        hours: 2,
        lastWeek: 2,
    }
}

const MonthlyStats = {
    work: {
        hours: 103,
        lastMonth: 128,
    },
    play: {
        hours: 23,
        lastMonth: 29,
    },
    study: {
        hours: 13,
        lastMonth: 19,
    },
    exercise: {
        hours: 11,
        lastMonth: 18,
    },
    social: {
        hours: 21,
        lastMonth: 23,
    },
    selfCare: {
        hours: 7,
        lastMonth: 11,
    }
}


const StateButtons = document.querySelectorAll('.states button');

const WorkHours = document.querySelector('.work .time h1');
const WorkPrevious = document.querySelector('.work .time p');
const PlayHours = document.querySelector('.play .time h1');
const PlayPrevious = document.querySelector('.play .time p');
const StudyHours = document.querySelector('.study .time h1');
const StudyPrevious = document.querySelector('.study .time p');
const ExerciseHours = document.querySelector('.exercise .time h1');
const ExercisePrevious = document.querySelector('.exercise .time p');
const SocialHours = document.querySelector('.social .time h1');
const SocialPrevious = document.querySelector('.social .time p');
const SelfCareHours = document.querySelector('.self-care .time h1');
const SelfCarePrevious = document.querySelector('.self-care .time p');


function LoadDaily() {
    WorkHours.innerHTML = `${DailyStats.work.hours}hrs`;
    WorkPrevious.innerHTML = `Yesterday - ${DailyStats.work.yesterday}hrs`;
    PlayHours.innerHTML = `${DailyStats.play.hours}hrs`;
    PlayPrevious.innerHTML = `Yesterday - ${DailyStats.play.yesterday}hrs`;
    StudyHours.innerHTML = `${DailyStats.study.hours}hrs`;
    StudyPrevious.innerHTML = `Yesterday - ${DailyStats.study.yesterday}hrs`;
    ExerciseHours.innerHTML = `${DailyStats.exercise.hours}hrs`;
    ExercisePrevious.innerHTML = `Yesterday - ${DailyStats.exercise.yesterday}hrs`;
    SocialHours.innerHTML = `${DailyStats.social.hours}hrs`;
    SocialPrevious.innerHTML = `Yesterday - ${DailyStats.social.yesterday}hrs`;
    SelfCareHours.innerHTML = `${DailyStats.selfCare.hours}hrs`;
    SelfCarePrevious.innerHTML = `Yesterday - ${DailyStats.selfCare.yesterday}hrs`;
}

function LoadWeekly() {
    WorkHours.innerHTML = `${WeeklyStats.work.hours}hrs`;
    WorkPrevious.innerHTML = `Last Week - ${WeeklyStats.work.lastWeek}hrs`;
    PlayHours.innerHTML = `${WeeklyStats.play.hours}hrs`;
    PlayPrevious.innerHTML = `Last Week - ${WeeklyStats.play.lastWeek}hrs`;
    StudyHours.innerHTML = `${WeeklyStats.study.hours}hrs`;
    StudyPrevious.innerHTML = `Last Week - ${WeeklyStats.study.lastWeek}hrs`;
    ExerciseHours.innerHTML = `${WeeklyStats.exercise.hours}hrs`;
    ExercisePrevious.innerHTML = `Last Week - ${WeeklyStats.exercise.lastWeek}hrs`;
    SocialHours.innerHTML = `${WeeklyStats.social.hours}hrs`;
    SocialPrevious.innerHTML = `Last Week - ${WeeklyStats.social.lastWeek}hrs`;
    SelfCareHours.innerHTML = `${WeeklyStats.selfCare.hours}hrs`;
    SelfCarePrevious.innerHTML = `Last Week - ${WeeklyStats.selfCare.lastWeek}hrs`;
}

function LoadMonthly() {
    WorkHours.innerHTML = `${MonthlyStats.work.hours}hrs`;
    WorkPrevious.innerHTML = `Last Month - ${MonthlyStats.work.lastMonth}hrs`;
    PlayHours.innerHTML = `${MonthlyStats.play.hours}hrs`;
    PlayPrevious.innerHTML = `Last Month - ${MonthlyStats.play.lastMonth}hrs`;
    StudyHours.innerHTML = `${MonthlyStats.study.hours}hrs`;
    StudyPrevious.innerHTML = `Last Month - ${MonthlyStats.study.lastMonth}hrs`;
    ExerciseHours.innerHTML = `${MonthlyStats.exercise.hours}hrs`;
    ExercisePrevious.innerHTML = `Last Month - ${MonthlyStats.exercise.lastMonth}hrs`;
    SocialHours.innerHTML = `${MonthlyStats.social.hours}hrs`;
    SocialPrevious.innerHTML = `Last Month - ${MonthlyStats.social.lastMonth}hrs`;
    SelfCareHours.innerHTML = `${MonthlyStats.selfCare.hours}hrs`;
    SelfCarePrevious.innerHTML = `Last Month - ${MonthlyStats.selfCare.lastMonth}hrs`;
}


StateButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        if(button.innerHTML === 'Daily')
            LoadDaily()
        else
        if(button.innerHTML === 'Weekly')
            LoadWeekly()
        else
            LoadMonthly()
        StateButtons.forEach(btn => {
            if(btn !== button)
                btn.classList.remove('active');
        })
    })
});
