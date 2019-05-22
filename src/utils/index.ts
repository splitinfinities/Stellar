export { colors } from '../utils/colors';
import properties from 'css-custom-properties';
import isHexColor from 'validator/lib/isHexColor';
import delay from 'async-delay';
import ResizeObserver from 'resize-observer-polyfill';
import Tween, { Easing } from 'tweenkle';
import focusWithin from 'focus-within'
import parentNodeSelector from 'parent-node-selector'
import deepmerge from 'deepmerge'
import zxcvbn from "zxcvbn";
import TinyDatePicker from 'tiny-date-picker';
import moment from 'moment';
import mediumZoom from 'medium-zoom';

export function rIC(callback: () => void) {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 32);
  }
}

export const blurringEase = (args: EaseParams): TweenInstance => {

  const ease = {
    "Linear": Easing.Linear,
    "Back.In": Easing.Back.In,
    "Back.Out": Easing.Back.Out,
    "Back.InOut": Easing.Back.InOut,
    "Bounce.In": Easing.Bounce.In,
    "Bounce.Out": Easing.Bounce.Out,
    "Bounce.InOut": Easing.Bounce.InOut,
    "Circ.In": Easing.Circ.In,
    "Circ.Out": Easing.Circ.Out,
    "Circ.InOut": Easing.Circ.InOut,
    "Cubic.In": Easing.Cubic.In,
    "Cubic.Out": Easing.Cubic.Out,
    "Cubic.InOut": Easing.Cubic.InOut,
    "Elastic.In": Easing.Elastic.In,
    "Elastic.Out": Easing.Elastic.Out,
    "Elastic.InOut": Easing.Elastic.InOut,
    "Quad.In": Easing.Quad.In,
    "Quad.Out": Easing.Quad.Out,
    "Quad.InOut": Easing.Quad.InOut,
    "Quart.In": Easing.Quart.In,
    "Quart.Out": Easing.Quart.Out,
    "Quart.InOut": Easing.Quart.InOut,
    "Quint.In": Easing.Quint.In,
    "Quint.Out": Easing.Quint.Out,
    "Quint.InOut": Easing.Quint.InOut,
    "Sine.In": Easing.Sine.In,
    "Sine.Out": Easing.Sine.Out,
    "Sine.InOut": Easing.Sine.InOut,
  }

  const tweenForward: TweenInstance = new Tween({
    start: args.start || 0,
    end: args.end || 10,
    duration: (args.duration || 350) / 2,
    ease: ease[args.ease || "Circ.InOut"],
    delay: args.delay || 0
  });

  const tweenBackward: TweenInstance = new Tween({
    start: args.end || 10,
    end: args.start || 0,
    duration: (args.duration || 350) / 2,
    ease: ease[args.ease || "Circ.InOut"],
    delay: args.delay || 0
  });

  tweenForward.on('tick', (cb_args) => {
    args.tick(cb_args)
  });

  tweenForward.on('complete', () => {
    tweenBackward.start()
    tweenForward.progress = 0;
  });

  tweenBackward.on('tick', (cb_args) => {
    args.tick(cb_args)
  });

  tweenBackward.on('complete', (cb_args) => {
    args.complete(cb_args);
    tweenBackward.progress = 0;
  });

  return tweenForward;
}

export function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

export var shuffle = function (array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

String.prototype['format'] = function() {
  var formatted = this;
  for( var arg in arguments ) {
    formatted = formatted.replace("{" + arg + "}", arguments[arg]);
  }
  return formatted;
};


export const asyncForEach = async function (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}


export function convert(s, val) {
  var names = s.replace(/^\w+/, "$&]").replace(/]$/, "").split("][");
  var result = {};
  var obj = result;
  var last;

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (typeof last !== "undefined") {
      obj[last] = name === "" ? [] : {};
      obj = obj[last];
    }
    last = name === "" ? 0 : name;
  }

  obj[last] = val;

  return result;
}

export function form2js(data) {
  let object = {};

  data.forEach(item => {
    if (item.name && item.value && item.value !== "") {
      let result = convert(item.name, item.value)
      object = deepmerge.all([object, result])
    }
  })

  return object;
}

const DARK = '(prefers-color-scheme: dark)'
const LIGHT = '(prefers-color-scheme: light)'

function changeWebsiteTheme(scheme) {
  if (scheme === "dark") {
    document.querySelector('html').classList.add('dark-mode');
  } else {
    document.querySelector('html').classList.remove('dark-mode');
  }
}

function detectColorScheme() {
    if(!window.matchMedia) {
        return
    }
    function listener({matches, media}) {
        if(!matches) { // Not matching anymore = not interesting
            return
        }
        if (media === DARK) {
            changeWebsiteTheme('dark')
        } else if (media === LIGHT) {
            changeWebsiteTheme('light')
        }
    }
    const mqDark = window.matchMedia('(prefers-color-scheme: dark)')
    mqDark.addListener(listener)
    const mqLight = window.matchMedia(LIGHT)
    mqLight.addListener(listener)
}

window['detectColorScheme'] = detectColorScheme;

/**
 * Test for pseudo-class support
 * @param  {String} pseudoClass The pseudo-class
 * @return {Boolean}            Returns true if supported
 */
var supportsPseudo = function (pseudoClass) {

	// Get the document stylesheet
	var ss = document.styleSheets[0];

	// Create a stylesheet if one doesn't exist
	if (!ss) {
		var el = document.createElement('style');
		document.head.appendChild(el);
		ss = document.styleSheets[0];
		document.head.removeChild(el);
	}

	// Test the pseudo-class by trying to style with it
	var testPseudo = function () {
		try {
			if (!(/^:/).test(pseudoClass)) {
				pseudoClass = ':' + pseudoClass;
      }
      // @ts-ignore
      ss.insertRule('html' + pseudoClass + '{}', 0);
      // @ts-ignore
			ss.deleteRule(0);
			return true;
		} catch(e) {
			return false;
		}
	};

	// Run the test
	return testPseudo();

};

if (document && document.styleSheets && !supportsPseudo(':host-context(.dark-mode)')) {
  document.querySelector('html').classList.add('no-host-context')
}

export const asTime = function (float) {
	var sec_num = float;
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds: string|number = sec_num - (hours * 3600) - (minutes * 60);

	seconds = (seconds < 10) ? "0" + seconds : seconds;

	var count = (minutes+":"+seconds).split('.')

	return count[0];
}


export const leadingZeroIndex = function (index) {
	var s = index+"";
	while (s.length < 2) s = "0" + s;
	return s;
}

export const relPathAsAbs = function (sRelPath) {
	var nUpLn, sDir = "", sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
	for (var nEnd, nStart = 0; nEnd = sPath.indexOf("/../", nStart), nEnd > -1; nStart = nEnd + nUpLn) {
		nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
		sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((nUpLn - 1) / 3) + "}$"), "/");
	}
	return sDir + sPath.substr(nStart);
}



export {
  properties,
  isHexColor,
  delay,
  ResizeObserver,
  focusWithin,
  parentNodeSelector,
  zxcvbn,
  TinyDatePicker,
  moment,
  detectColorScheme,
  mediumZoom
}
