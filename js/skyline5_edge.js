/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['481px', '137px','201px','178px','auto', 'auto'],
                fill: ["rgba(255,158,73,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['28px', '77px','92px','238px','auto', 'auto'],
                fill: ["rgba(255,73,73,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['146px', '187px','379px','128px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['256px', '40px','126px','275px','auto', 'auto'],
                fill: ["rgba(0,185,11,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['182px', '113px','110px','202px','auto', 'auto'],
                fill: ["rgba(73,78,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['22px', '315px','20px','16px','auto', 'auto'],
                text: "0",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['113px', '315px','20px','16px','auto', 'auto'],
                text: "1",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['140px', '315px','20px','16px','auto', 'auto'],
                text: "2",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", ""]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['175px', '315px','20px','16px','auto', 'auto'],
                text: "3",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['285px', '315px','20px','16px','auto', 'auto'],
                text: "5",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['375px', '315px','20px','16px','auto', 'auto'],
                text: "6",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy7',
                type: 'text',
                rect: ['474px', '315px','20px','16px','auto', 'auto'],
                text: "7",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['249px', '315px','20px','16px','auto', 'auto'],
                text: "4",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy8',
                type: 'text',
                rect: ['518px', '315px','20px','16px','auto', 'auto'],
                text: "8",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy9',
                type: 'text',
                rect: ['675px', '315px','20px','16px','auto', 'auto'],
                text: "9",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Scan_line',
                type: 'rect',
                rect: ['0px', '0px','1px','315px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '113px'],
                ["style", "height", '202px'],
                ["color", "background-color", 'rgba(73,78,255,1)'],
                ["style", "left", '182px'],
                ["style", "width", '110px']
            ],
            "${_Scan_line}": [
                ["style", "height", '315px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '146px'],
                ["style", "width", '1px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,73,73,1)'],
                ["style", "height", '238px'],
                ["style", "top", '77px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(0,185,11,1)']
            ],
            "${_TextCopy4}": [
                ["style", "left", '285px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_TextCopy3}": [
                ["style", "left", '175px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_TextCopy5}": [
                ["style", "left", '249px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,158,73,1)']
            ],
            "${_TextCopy}": [
                ["style", "left", '113px']
            ],
            "${_TextCopy6}": [
                ["style", "left", '375px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_TextCopy8}": [
                ["style", "left", '518px']
            ],
            "${_Text}": [
                ["style", "left", '22px']
            ],
            "${_TextCopy9}": [
                ["style", "left", '675px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '340px'],
                ["style", "width", '703px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(249,73,255,1)'],
                ["style", "left", '146px'],
                ["style", "width", '379px']
            ],
            "${_TextCopy7}": [
                ["style", "left", '474px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_TextCopy2}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '140px'],
                ["style", "text-decoration", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7306,
            autoPlay: true,
            timeline: [
                { id: "eid154", tween: [ "style", "${_Scan_line}", "left", '181px', { fromValue: '146px'}], position: 500, duration: 360 },
                { id: "eid155", tween: [ "style", "${_Scan_line}", "left", '255px', { fromValue: '181px'}], position: 1360, duration: 740 },
                { id: "eid156", tween: [ "style", "${_Scan_line}", "left", '291px', { fromValue: '255px'}], position: 2600, duration: 360 },
                { id: "eid157", tween: [ "style", "${_Scan_line}", "left", '381px', { fromValue: '291px'}], position: 3460, duration: 900 },
                { id: "eid158", tween: [ "style", "${_Scan_line}", "left", '480px', { fromValue: '381px'}], position: 4860, duration: 996 },
                { id: "eid159", tween: [ "style", "${_Scan_line}", "left", '525px', { fromValue: '480px'}], position: 6356, duration: 450 },
                { id: "eid165", tween: [ "color", "${_TextCopy3}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "color", "${_TextCopy3}", "color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 1110, duration: 0 },
                { id: "eid177", tween: [ "color", "${_TextCopy6}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid179", tween: [ "color", "${_TextCopy6}", "color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 4610, duration: 0 },
                { id: "eid182", tween: [ "color", "${_TextCopy5}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "color", "${_TextCopy5}", "color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 2350, duration: 0 },
                { id: "eid166", tween: [ "color", "${_TextCopy2}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 250, duration: 0 },
                { id: "eid176", tween: [ "color", "${_TextCopy4}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "color", "${_TextCopy4}", "color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 3210, duration: 0 },
                { id: "eid180", tween: [ "color", "${_TextCopy7}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid181", tween: [ "color", "${_TextCopy7}", "color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 6106, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-540608186");
