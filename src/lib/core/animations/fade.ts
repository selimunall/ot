import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDurations } from './defaults';

const fadeIn = trigger('fadeIn',
  [
    state('void',
      style({
        opacity: 0
      })
    ),

    state('*',
      style({
        opacity: 1
      })
    ),

    // Prevent the transition if the state is false
    transition('void => false', []),

    // Transition
    transition('void => *', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.entering} ${AnimationCurves.deceleration}`
        }
      }
    )
  ]
);

const fadeInTop = trigger('fadeInTop',
  [
    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)'
      })
    ),

    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('void => false', []),

    // Transition
    transition('void => *', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.entering} ${AnimationCurves.deceleration}`
        }
      }
    )
  ]
);

const fadeInBottom = trigger('fadeInBottom',
  [
    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
      })
    ),

    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('void => false', []),

    // Transition
    transition('void => *', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.entering} ${AnimationCurves.deceleration}`
        }
      }
    )
  ]
);

const fadeInLeft = trigger('fadeInLeft',
  [
    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)'
      })
    ),

    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('void => false', []),

    // Transition
    transition('void => *', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.entering} ${AnimationCurves.deceleration}`
        }
      }
    )
  ]
);

const fadeInRight = trigger('fadeInRight',
  [
    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
      })
    ),

    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('void => false', []),

    // Transition
    transition('void => *', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.entering} ${AnimationCurves.deceleration}`
        }
      }
    )
  ]
);

const fadeOut = trigger('fadeOut',
  [
    state('*',
      style({
        opacity: 1
      })
    ),

    state('void',
      style({
        opacity: 0
      })
    ),

    // Prevent the transition if the state is false
    transition('false => void', []),

    // Transition
    transition('* => void', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.exiting} ${AnimationCurves.acceleration}`
        }
      }
    )
  ]
);

const fadeOutTop = trigger('fadeOutTop',
  [
    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('false => void', []),

    // Transition
    transition('* => void', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.exiting} ${AnimationCurves.acceleration}`
        }
      }
    )
  ]
);

const fadeOutBottom = trigger('fadeOutBottom',
  [
    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('false => void', []),

    // Transition
    transition('* => void', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.exiting} ${AnimationCurves.acceleration}`
        }
      }
    )
  ]
);


const fadeOutLeft = trigger('fadeOutLeft',
  [
    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('false => void', []),

    // Transition
    transition('* => void', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.exiting} ${AnimationCurves.acceleration}`
        }
      }
    )
  ]
);

const fadeOutRight = trigger('fadeOutRight',
  [
    state('*',
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })
    ),

    state('void',
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
      })
    ),

    // Prevent the transition if the state is false
    transition('false => void', []),

    // Transition
    transition('* => void', animate('{{timings}}'),
      {
        params: {
          timings: `${AnimationDurations.exiting} ${AnimationCurves.acceleration}`
        }
      }
    )
  ]
);

export { fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight, fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight };
