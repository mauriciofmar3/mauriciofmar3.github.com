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
                id: 'scan_line',
                type: 'rect',
                rect: ['0px', '0px','1px','315px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'indicator1',
                type: 'rect',
                rect: ['-7px', '321px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2Copy',
                display: 'none',
                type: 'rect',
                rect: ['139px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2Copy3',
                display: 'none',
                type: 'rect',
                rect: ['175px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator3Copy',
                display: 'none',
                type: 'rect',
                rect: ['175px', '356px','15px','15px','auto', 'auto'],
                fill: ["rgba(73,78,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2Copy4',
                display: 'none',
                type: 'rect',
                rect: ['175px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator3Copy2',
                display: 'none',
                type: 'rect',
                rect: ['249px', '356px','15px','15px','auto', 'auto'],
                fill: ["rgba(73,78,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator4Copy',
                display: 'none',
                type: 'rect',
                rect: ['175px', '373px','15px','15px','auto', 'auto'],
                fill: ["rgba(0,185,11,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2Copy5',
                display: 'none',
                type: 'rect',
                rect: ['285px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2Copy6',
                display: 'none',
                type: 'rect',
                rect: ['285px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2Copy7',
                display: 'none',
                type: 'rect',
                rect: ['285px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator5Copy',
                display: 'none',
                type: 'rect',
                rect: ['285px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,158,73,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator5Copy2',
                display: 'none',
                type: 'rect',
                rect: ['285px', '339px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,158,73,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator4Copy2',
                display: 'none',
                type: 'rect',
                rect: ['285px', '373px','15px','15px','auto', 'auto'],
                fill: ["rgba(0,185,11,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator1Copy8',
                display: 'none',
                type: 'rect',
                rect: ['21px', '322px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,73,73,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator2',
                type: 'rect',
                rect: ['-7px', '338px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'indicator3',
                type: 'rect',
                rect: ['-7px', '355px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgba(73,78,255,1.00)","solid"]
            },
            {
                id: 'indicator4',
                type: 'rect',
                rect: ['-7px', '372px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgba(0,185,11,1.00)","solid"]
            },
            {
                id: 'indicator5',
                type: 'rect',
                rect: ['-7px', '389px','15px','15px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgba(255,158,73,1.00)","solid"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_indicator3}": [
                ["style", "top", '355px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "left", '-7px'],
                ["color", "border-color", 'rgba(73,78,255,1.00)'],
                ["style", "height", '13px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '13px']
            ],
            "${_indicator4}": [
                ["style", "top", '372px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "left", '-7px'],
                ["color", "border-color", 'rgba(0,185,11,1.00)'],
                ["style", "height", '13px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '13px']
            ],
            "${_indicator5Copy}": [
                ["color", "background-color", 'rgba(255,158,73,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '474px'],
                ["style", "width", '13px'],
                ["style", "top", '390px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-width", '0px']
            ],
            "${_scan_line}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1px']
            ],
            "${_indicator5}": [
                ["style", "top", '389px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "left", '-7px'],
                ["color", "border-color", 'rgba(255,158,73,1.00)'],
                ["style", "height", '13px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '13px']
            ],
            "${_indicator3Copy2}": [
                ["color", "background-color", 'rgba(73,78,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '249px'],
                ["style", "width", '13px'],
                ["style", "top", '356px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-width", '0px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,73,73,1)'],
                ["style", "height", '238px'],
                ["style", "top", '77px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(0,185,11,1)']
            ],
            "${_indicator5Copy2}": [
                ["color", "background-color", 'rgba(255,158,73,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '519px'],
                ["style", "width", '13px'],
                ["style", "top", '390px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_indicator1Copy8}": [
                ["color", "background-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '21px'],
                ["style", "width", '13px'],
                ["style", "top", '322px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_indicator2}": [
                ["style", "top", '338px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "left", '-7px'],
                ["color", "border-color", 'rgba(249,73,255,1.00)'],
                ["style", "height", '13px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '13px']
            ],
            "${_indicator1}": [
                ["style", "top", '321px'],
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "left", '-7px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "height", '13px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '13px']
            ],
            "${_indicator3Copy}": [
                ["color", "background-color", 'rgba(73,78,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '175px'],
                ["style", "width", '13px'],
                ["style", "top", '356px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_indicator2Copy3}": [
                ["color", "background-color", 'rgba(249,73,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '175px'],
                ["style", "width", '13px'],
                ["style", "top", '339px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,158,73,1)']
            ],
            "${_indicator4Copy2}": [
                ["color", "background-color", 'rgba(0,185,11,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '285px'],
                ["style", "width", '13px'],
                ["style", "top", '373px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-width", '0px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(249,73,255,1)'],
                ["style", "left", '146px'],
                ["style", "width", '379px']
            ],
            "${_indicator2Copy5}": [
                ["color", "background-color", 'rgba(249,73,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '285px'],
                ["style", "width", '13px'],
                ["style", "top", '339px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_indicator2Copy7}": [
                ["color", "background-color", 'rgba(249,73,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '474px'],
                ["style", "width", '13px'],
                ["style", "top", '339px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["style", "top", '113px'],
                ["style", "height", '202px'],
                ["color", "background-color", 'rgba(73,78,255,1)'],
                ["style", "left", '182px'],
                ["style", "width", '110px']
            ],
            "${_indicator2Copy4}": [
                ["color", "background-color", 'rgba(249,73,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '249px'],
                ["style", "width", '13px'],
                ["style", "top", '339px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-width", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '410px'],
                ["style", "width", '703px']
            ],
            "${_indicator2Copy6}": [
                ["color", "background-color", 'rgba(249,73,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '375px'],
                ["style", "width", '13px'],
                ["style", "top", '339px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-width", '0px']
            ],
            "${_indicator4Copy}": [
                ["color", "background-color", 'rgba(0,185,11,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '249px'],
                ["style", "width", '13px'],
                ["style", "top", '373px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none']
            ],
            "${_indicator2Copy}": [
                ["color", "background-color", 'rgba(249,73,255,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '139px'],
                ["style", "width", '13px'],
                ["style", "top", '339px'],
                ["style", "height", '13px'],
                ["color", "border-color", 'rgba(255,73,73,1.00)'],
                ["style", "display", 'none'],
                ["style", "border-width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12130,
            autoPlay: true,
            timeline: [
                { id: "eid321", tween: [ "style", "${_indicator1Copy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid322", tween: [ "style", "${_indicator1Copy8}", "display", 'block', { fromValue: 'none'}], position: 270, duration: 0 },
                { id: "eid341", tween: [ "style", "${_indicator4Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid342", tween: [ "style", "${_indicator4Copy2}", "display", 'block', { fromValue: 'none'}], position: 5510, duration: 0 },
                { id: "eid334", tween: [ "style", "${_indicator2Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid335", tween: [ "style", "${_indicator2Copy4}", "display", 'block', { fromValue: 'none'}], position: 4550, duration: 0 },
                { id: "eid332", tween: [ "style", "${_indicator3Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid333", tween: [ "style", "${_indicator3Copy2}", "display", 'block', { fromValue: 'none'}], position: 4550, duration: 0 },
                { id: "eid319", tween: [ "style", "${_indicator2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_indicator2Copy}", "display", 'block', { fromValue: 'none'}], position: 2450, duration: 0 },
                { id: "eid301", tween: [ "color", "${_indicator1}", "background-color", 'rgba(255,255,255,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "color", "${_indicator1}", "background-color", 'rgba(255,73,73,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 270, duration: 0 },
                { id: "eid314", tween: [ "color", "${_indicator1}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,73,73,1)'}], position: 1700, duration: 0 },
                { id: "eid330", tween: [ "color", "${_indicator4}", "background-color", 'rgba(255,255,255,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 0, duration: 0 },
                { id: "eid350", tween: [ "color", "${_indicator4}", "background-color", 'rgba(0,185,11,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 4550, duration: 0 },
                { id: "eid364", tween: [ "color", "${_indicator4}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,185,11,1.00)'}], position: 6910, duration: 0 },
                { id: "eid200", tween: [ "style", "${_indicator3}", "left", '20px', { fromValue: '-7px'}], position: 0, duration: 270 },
                { id: "eid201", tween: [ "style", "${_indicator3}", "left", '113px', { fromValue: '20px'}], position: 770, duration: 930 },
                { id: "eid261", tween: [ "style", "${_indicator3}", "left", '138px', { fromValue: '113px'}], position: 2200, duration: 250 },
                { id: "eid274", tween: [ "style", "${_indicator3}", "left", '174px', { fromValue: '138px'}], position: 2950, duration: 360 },
                { id: "eid203", tween: [ "style", "${_indicator3}", "left", '248px', { fromValue: '174px'}], position: 3810, duration: 740 },
                { id: "eid204", tween: [ "style", "${_indicator3}", "left", '284px', { fromValue: '248px'}], position: 5150, duration: 360 },
                { id: "eid205", tween: [ "style", "${_indicator3}", "left", '374px', { fromValue: '284px'}], position: 6010, duration: 900 },
                { id: "eid206", tween: [ "style", "${_indicator3}", "left", '473px', { fromValue: '374px'}], position: 7410, duration: 990 },
                { id: "eid207", tween: [ "style", "${_indicator3}", "left", '518px', { fromValue: '473px'}], position: 8900, duration: 450 },
                { id: "eid208", tween: [ "style", "${_indicator3}", "left", '675px', { fromValue: '518px'}], position: 9850, duration: 1570 },
                { id: "eid381", tween: [ "style", "${_indicator3}", "left", '696px', { fromValue: '675px'}], position: 11920, duration: 210 },
                { id: "eid343", tween: [ "style", "${_indicator2Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid344", tween: [ "style", "${_indicator2Copy5}", "display", 'block', { fromValue: 'none'}], position: 5510, duration: 0 },
                { id: "eid328", tween: [ "style", "${_indicator2Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid329", tween: [ "style", "${_indicator2Copy3}", "display", 'block', { fromValue: 'none'}], position: 3310, duration: 0 },
                { id: "eid326", tween: [ "style", "${_indicator3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_indicator3Copy}", "display", 'block', { fromValue: 'none'}], position: 3310, duration: 0 },
                { id: "eid182", tween: [ "style", "${_indicator1}", "left", '20px', { fromValue: '-7px'}], position: 0, duration: 270 },
                { id: "eid183", tween: [ "style", "${_indicator1}", "left", '113px', { fromValue: '20px'}], position: 770, duration: 930 },
                { id: "eid257", tween: [ "style", "${_indicator1}", "left", '138px', { fromValue: '113px'}], position: 2200, duration: 250 },
                { id: "eid272", tween: [ "style", "${_indicator1}", "left", '174px', { fromValue: '138px'}], position: 2950, duration: 360 },
                { id: "eid185", tween: [ "style", "${_indicator1}", "left", '248px', { fromValue: '174px'}], position: 3810, duration: 740 },
                { id: "eid186", tween: [ "style", "${_indicator1}", "left", '284px', { fromValue: '248px'}], position: 5150, duration: 360 },
                { id: "eid187", tween: [ "style", "${_indicator1}", "left", '374px', { fromValue: '284px'}], position: 6010, duration: 900 },
                { id: "eid188", tween: [ "style", "${_indicator1}", "left", '473px', { fromValue: '374px'}], position: 7410, duration: 990 },
                { id: "eid189", tween: [ "style", "${_indicator1}", "left", '518px', { fromValue: '473px'}], position: 8900, duration: 450 },
                { id: "eid190", tween: [ "style", "${_indicator1}", "left", '675px', { fromValue: '518px'}], position: 9850, duration: 1570 },
                { id: "eid379", tween: [ "style", "${_indicator1}", "left", '696px', { fromValue: '675px'}], position: 11920, duration: 210 },
                { id: "eid351", tween: [ "style", "${_indicator2Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid352", tween: [ "style", "${_indicator2Copy7}", "display", 'block', { fromValue: 'none'}], position: 8400, duration: 0 },
                { id: "eid338", tween: [ "style", "${_indicator4Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid339", tween: [ "style", "${_indicator4Copy}", "display", 'block', { fromValue: 'none'}], position: 4550, duration: 0 },
                { id: "eid365", tween: [ "style", "${_indicator5Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid366", tween: [ "style", "${_indicator5Copy2}", "display", 'block', { fromValue: 'none'}], position: 9350, duration: 0 },
                { id: "eid347", tween: [ "style", "${_indicator2Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid348", tween: [ "style", "${_indicator2Copy6}", "display", 'block', { fromValue: 'none'}], position: 6910, duration: 0 },
                { id: "eid317", tween: [ "color", "${_indicator2}", "background-color", 'rgba(255,255,255,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 0, duration: 0 },
                { id: "eid360", tween: [ "color", "${_indicator2}", "background-color", 'rgba(249,73,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 2450, duration: 0 },
                { id: "eid361", tween: [ "color", "${_indicator2}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(249,73,255,1.00)'}], position: 9350, duration: 0 },
                { id: "eid354", tween: [ "style", "${_indicator5Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${_indicator5Copy}", "display", 'block', { fromValue: 'none'}], position: 8400, duration: 0 },
                { id: "eid209", tween: [ "style", "${_indicator4}", "left", '20px', { fromValue: '-7px'}], position: 0, duration: 270 },
                { id: "eid210", tween: [ "style", "${_indicator4}", "left", '113px', { fromValue: '20px'}], position: 770, duration: 930 },
                { id: "eid251", tween: [ "style", "${_indicator4}", "left", '138px', { fromValue: '113px'}], position: 2200, duration: 250 },
                { id: "eid270", tween: [ "style", "${_indicator4}", "left", '174px', { fromValue: '138px'}], position: 2950, duration: 360 },
                { id: "eid212", tween: [ "style", "${_indicator4}", "left", '248px', { fromValue: '174px'}], position: 3810, duration: 740 },
                { id: "eid213", tween: [ "style", "${_indicator4}", "left", '284px', { fromValue: '248px'}], position: 5150, duration: 360 },
                { id: "eid214", tween: [ "style", "${_indicator4}", "left", '374px', { fromValue: '284px'}], position: 6010, duration: 900 },
                { id: "eid215", tween: [ "style", "${_indicator4}", "left", '473px', { fromValue: '374px'}], position: 7410, duration: 990 },
                { id: "eid216", tween: [ "style", "${_indicator4}", "left", '518px', { fromValue: '473px'}], position: 8900, duration: 450 },
                { id: "eid217", tween: [ "style", "${_indicator4}", "left", '675px', { fromValue: '518px'}], position: 9850, duration: 1570 },
                { id: "eid376", tween: [ "style", "${_indicator4}", "left", '696px', { fromValue: '675px'}], position: 11920, duration: 210 },
                { id: "eid218", tween: [ "style", "${_indicator5}", "left", '20px', { fromValue: '-7px'}], position: 0, duration: 270 },
                { id: "eid219", tween: [ "style", "${_indicator5}", "left", '113px', { fromValue: '20px'}], position: 770, duration: 930 },
                { id: "eid253", tween: [ "style", "${_indicator5}", "left", '138px', { fromValue: '113px'}], position: 2200, duration: 250 },
                { id: "eid269", tween: [ "style", "${_indicator5}", "left", '174px', { fromValue: '138px'}], position: 2950, duration: 360 },
                { id: "eid221", tween: [ "style", "${_indicator5}", "left", '248px', { fromValue: '174px'}], position: 3810, duration: 740 },
                { id: "eid222", tween: [ "style", "${_indicator5}", "left", '284px', { fromValue: '248px'}], position: 5150, duration: 360 },
                { id: "eid223", tween: [ "style", "${_indicator5}", "left", '374px', { fromValue: '284px'}], position: 6010, duration: 900 },
                { id: "eid224", tween: [ "style", "${_indicator5}", "left", '473px', { fromValue: '374px'}], position: 7410, duration: 990 },
                { id: "eid225", tween: [ "style", "${_indicator5}", "left", '518px', { fromValue: '473px'}], position: 8900, duration: 450 },
                { id: "eid226", tween: [ "style", "${_indicator5}", "left", '675px', { fromValue: '518px'}], position: 9850, duration: 1570 },
                { id: "eid377", tween: [ "style", "${_indicator5}", "left", '696px', { fromValue: '675px'}], position: 11920, duration: 210 },
                { id: "eid191", tween: [ "style", "${_indicator2}", "left", '20px', { fromValue: '-7px'}], position: 0, duration: 270 },
                { id: "eid192", tween: [ "style", "${_indicator2}", "left", '113px', { fromValue: '20px'}], position: 770, duration: 930 },
                { id: "eid255", tween: [ "style", "${_indicator2}", "left", '138px', { fromValue: '113px'}], position: 2200, duration: 250 },
                { id: "eid273", tween: [ "style", "${_indicator2}", "left", '174px', { fromValue: '138px'}], position: 2950, duration: 360 },
                { id: "eid194", tween: [ "style", "${_indicator2}", "left", '248px', { fromValue: '174px'}], position: 3810, duration: 740 },
                { id: "eid195", tween: [ "style", "${_indicator2}", "left", '284px', { fromValue: '248px'}], position: 5150, duration: 360 },
                { id: "eid196", tween: [ "style", "${_indicator2}", "left", '374px', { fromValue: '284px'}], position: 6010, duration: 900 },
                { id: "eid197", tween: [ "style", "${_indicator2}", "left", '473px', { fromValue: '374px'}], position: 7410, duration: 990 },
                { id: "eid198", tween: [ "style", "${_indicator2}", "left", '518px', { fromValue: '473px'}], position: 8900, duration: 450 },
                { id: "eid199", tween: [ "style", "${_indicator2}", "left", '675px', { fromValue: '518px'}], position: 9850, duration: 1570 },
                { id: "eid378", tween: [ "style", "${_indicator2}", "left", '696px', { fromValue: '675px'}], position: 11920, duration: 210 },
                { id: "eid359", tween: [ "color", "${_indicator5}", "background-color", 'rgba(255,255,255,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 0, duration: 0 },
                { id: "eid368", tween: [ "color", "${_indicator5}", "background-color", 'rgba(255,158,73,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 8400, duration: 0 },
                { id: "eid369", tween: [ "color", "${_indicator5}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,158,73,1.00)'}], position: 11420, duration: 0 },
                { id: "eid88", tween: [ "style", "${_scan_line}", "left", '27px', { fromValue: '0px'}], position: 0, duration: 270 },
                { id: "eid89", tween: [ "style", "${_scan_line}", "left", '120px', { fromValue: '27px'}], position: 770, duration: 930 },
                { id: "eid259", tween: [ "style", "${_scan_line}", "left", '145px', { fromValue: '120px'}], position: 2200, duration: 250 },
                { id: "eid271", tween: [ "style", "${_scan_line}", "left", '181px', { fromValue: '145px'}], position: 2950, duration: 360 },
                { id: "eid91", tween: [ "style", "${_scan_line}", "left", '255px', { fromValue: '181px'}], position: 3810, duration: 740 },
                { id: "eid92", tween: [ "style", "${_scan_line}", "left", '291px', { fromValue: '255px'}], position: 5150, duration: 360 },
                { id: "eid93", tween: [ "style", "${_scan_line}", "left", '381px', { fromValue: '291px'}], position: 6010, duration: 900 },
                { id: "eid94", tween: [ "style", "${_scan_line}", "left", '480px', { fromValue: '381px'}], position: 7410, duration: 990 },
                { id: "eid95", tween: [ "style", "${_scan_line}", "left", '525px', { fromValue: '480px'}], position: 8900, duration: 450 },
                { id: "eid96", tween: [ "style", "${_scan_line}", "left", '682px', { fromValue: '525px'}], position: 9850, duration: 1570 },
                { id: "eid380", tween: [ "style", "${_scan_line}", "left", '703px', { fromValue: '682px'}], position: 11920, duration: 210 },
                { id: "eid324", tween: [ "color", "${_indicator3}", "background-color", 'rgba(255,255,255,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 0, duration: 0 },
                { id: "eid346", tween: [ "color", "${_indicator3}", "background-color", 'rgba(73,78,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 3310, duration: 0 },
                { id: "eid363", tween: [ "color", "${_indicator3}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(73,78,255,1.00)'}], position: 5510, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-skyline8");
