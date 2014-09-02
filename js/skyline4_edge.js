/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='/images/';

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
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['28px', '77px','92px','238px','auto', 'auto'],
                fill: ["rgba(255,73,73,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['146px', '187px','379px','128px','auto', 'auto'],
                fill: ["rgba(249,73,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['256px', '40px','126px','275px','auto', 'auto'],
                fill: ["rgba(0,185,11,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['182px', '113px','110px','202px','auto', 'auto'],
                fill: ["rgba(73,78,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Scan_line',
                type: 'rect',
                rect: ['0px', '0px','1px','315px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'segment1',
                display: 'none',
                type: 'rect',
                rect: ['28px', '74px','92px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy2',
                display: 'none',
                type: 'rect',
                rect: ['146px', '184px','36px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy8',
                display: 'none',
                type: 'rect',
                rect: ['256px', '184px','36px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy3',
                display: 'none',
                type: 'rect',
                rect: ['182px', '110px','74px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy7',
                display: 'none',
                type: 'rect',
                rect: ['182px', '184px','74px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy11',
                display: 'none',
                type: 'rect',
                rect: ['292px', '184px','90px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy4',
                display: 'none',
                type: 'rect',
                rect: ['256px', '37px','126px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy15',
                display: 'none',
                type: 'rect',
                rect: ['256px', '37px','126px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy5',
                display: 'none',
                type: 'rect',
                rect: ['382px', '184px','99px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy6',
                display: 'none',
                type: 'rect',
                rect: ['481px', '134px','201px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy16',
                display: 'none',
                type: 'rect',
                rect: ['525px', '134px','157px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy9',
                display: 'none',
                type: 'rect',
                rect: ['256px', '110px','36px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'segment1Copy10',
                display: 'none',
                type: 'rect',
                rect: ['481px', '184px','44px','3px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_segment1}": [
                ["style", "top", '74px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "width", '92px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '113px'],
                ["color", "background-color", 'rgba(73,78,255,1)'],
                ["style", "left", '182px'],
                ["style", "height", '202px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '0px'],
                ["style", "width", '110px']
            ],
            "${_segment1Copy2}": [
                ["style", "top", '184px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '146px'],
                ["style", "width", '36px']
            ],
            "${_segment1Copy9}": [
                ["style", "top", '110px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '256px'],
                ["style", "width", '36px']
            ],
            "${_segment1Copy16}": [
                ["style", "top", '134px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '525px'],
                ["style", "width", '157px']
            ],
            "${_segment1Copy8}": [
                ["style", "top", '184px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '256px'],
                ["style", "width", '36px']
            ],
            "${_segment1Copy15}": [
                ["style", "top", '37px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '292px'],
                ["style", "width", '90px']
            ],
            "${_segment1Copy5}": [
                ["style", "top", '184px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '382px'],
                ["style", "width", '99px']
            ],
            "${_segment1Copy11}": [
                ["style", "top", '184px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '292px'],
                ["style", "width", '90px']
            ],
            "${_Scan_line}": [
                ["style", "height", '315px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1px']
            ],
            "${_segment1Copy7}": [
                ["style", "top", '184px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '182px'],
                ["style", "width", '74px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,73,73,1)'],
                ["style", "top", '77px'],
                ["style", "height", '238px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '28px'],
                ["style", "border-width", '0px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(0,185,11,1)'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '256px'],
                ["style", "top", '40px']
            ],
            "${_segment1Copy6}": [
                ["style", "top", '134px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '481px'],
                ["style", "width", '44px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(249,73,255,1)'],
                ["style", "top", '187px'],
                ["style", "left", '146px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '0px'],
                ["style", "width", '379px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '703px'],
                ["style", "height", '315px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,158,73,1)'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '481px'],
                ["style", "top", '137px']
            ],
            "${_segment1Copy3}": [
                ["style", "top", '110px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '182px'],
                ["style", "width", '74px']
            ],
            "${_segment1Copy10}": [
                ["style", "top", '184px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '481px'],
                ["style", "width", '44px']
            ],
            "${_segment1Copy4}": [
                ["style", "top", '37px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '256px'],
                ["style", "width", '36px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13536,
            autoPlay: true,
            timeline: [
                { id: "eid97", tween: [ "style", "${_Scan_line}", "left", '27px', { fromValue: '0px'}], position: 0, duration: 270 },
                { id: "eid223", tween: [ "style", "${_Scan_line}", "left", '146px', { fromValue: '27px'}], position: 770, duration: 1190 },
                { id: "eid366", tween: [ "style", "${_Scan_line}", "left", '181px', { fromValue: '146px'}], position: 2460, duration: 360 },
                { id: "eid400", tween: [ "style", "${_Scan_line}", "left", '255px', { fromValue: '181px'}], position: 3820, duration: 740 },
                { id: "eid438", tween: [ "style", "${_Scan_line}", "left", '291px', { fromValue: '255px'}], position: 6060, duration: 360 },
                { id: "eid481", tween: [ "style", "${_Scan_line}", "left", '381px', { fromValue: '291px'}], position: 7420, duration: 900 },
                { id: "eid514", tween: [ "style", "${_Scan_line}", "left", '480px', { fromValue: '381px'}], position: 8820, duration: 996 },
                { id: "eid550", tween: [ "style", "${_Scan_line}", "left", '525px', { fromValue: '480px'}], position: 10816, duration: 450 },
                { id: "eid587", tween: [ "style", "${_Scan_line}", "left", '702px', { fromValue: '525px'}], position: 11766, duration: 1770 },
                { id: "eid123", tween: [ "style", "${_segment1Copy11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid476", tween: [ "style", "${_segment1Copy11}", "display", 'block', { fromValue: 'none'}], position: 6420, duration: 0 },
                { id: "eid477", tween: [ "style", "${_segment1Copy11}", "display", 'none', { fromValue: 'block'}], position: 6920, duration: 0 },
                { id: "eid119", tween: [ "style", "${_segment1Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid433", tween: [ "style", "${_segment1Copy9}", "display", 'block', { fromValue: 'none'}], position: 5060, duration: 0 },
                { id: "eid434", tween: [ "style", "${_segment1Copy9}", "display", 'none', { fromValue: 'block'}], position: 5560, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Rectangle2}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid371", tween: [ "style", "${_Rectangle2}", "border-width", '3px', { fromValue: '0px'}], position: 3320, duration: 0 },
                { id: "eid372", tween: [ "style", "${_Rectangle2}", "border-width", '0px', { fromValue: '3px'}], position: 3820, duration: 0 },
                { id: "eid405", tween: [ "style", "${_Rectangle2}", "border-width", '3px', { fromValue: '0px'}], position: 5060, duration: 0 },
                { id: "eid406", tween: [ "style", "${_Rectangle2}", "border-width", '0px', { fromValue: '3px'}], position: 5560, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Rectangle}", "top", '77px', { fromValue: '77px'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Rectangle}", "top", '74px', { fromValue: '77px'}], position: 270, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Rectangle}", "top", '77px', { fromValue: '74px'}], position: 770, duration: 0 },
                { id: "eid121", tween: [ "style", "${_segment1Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid512", tween: [ "style", "${_segment1Copy5}", "display", 'block', { fromValue: 'none'}], position: 8320, duration: 0 },
                { id: "eid195", tween: [ "style", "${_Rectangle4}", "left", '256px', { fromValue: '256px'}], position: 0, duration: 0 },
                { id: "eid409", tween: [ "style", "${_Rectangle4}", "left", '253px', { fromValue: '256px'}], position: 5560, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Rectangle4}", "left", '256px', { fromValue: '253px'}], position: 6060, duration: 0 },
                { id: "eid454", tween: [ "style", "${_Rectangle4}", "left", '253px', { fromValue: '256px'}], position: 6920, duration: 0 },
                { id: "eid455", tween: [ "style", "${_Rectangle4}", "left", '256px', { fromValue: '253px'}], position: 7420, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
                { id: "eid339", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 1960, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 2460, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 2820, duration: 0 },
                { id: "eid382", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 3320, duration: 0 },
                { id: "eid415", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 4560, duration: 0 },
                { id: "eid416", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 5060, duration: 0 },
                { id: "eid460", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 6420, duration: 0 },
                { id: "eid461", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 6920, duration: 0 },
                { id: "eid496", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 8320, duration: 0 },
                { id: "eid497", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 8820, duration: 0 },
                { id: "eid529", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 9816, duration: 0 },
                { id: "eid530", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 10316, duration: 0 },
                { id: "eid127", tween: [ "style", "${_segment1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_segment1Copy2}", "display", 'block', { fromValue: 'none'}], position: 1960, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Rectangle}", "left", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Rectangle}", "left", '25px', { fromValue: '28px'}], position: 270, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Rectangle}", "left", '28px', { fromValue: '25px'}], position: 770, duration: 0 },
                { id: "eid120", tween: [ "style", "${_segment1Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid548", tween: [ "style", "${_segment1Copy6}", "display", 'block', { fromValue: 'none'}], position: 10316, duration: 0 },
                { id: "eid118", tween: [ "style", "${_segment1Copy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid545", tween: [ "style", "${_segment1Copy10}", "display", 'block', { fromValue: 'none'}], position: 9858, duration: 0 },
                { id: "eid546", tween: [ "style", "${_segment1Copy10}", "display", 'none', { fromValue: 'block'}], position: 10316, duration: 0 },
                { id: "eid117", tween: [ "style", "${_segment1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_segment1}", "display", 'block', { fromValue: 'none'}], position: 270, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '187px'}], position: 0, duration: 0 },
                { id: "eid336", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 1960, duration: 0 },
                { id: "eid337", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 2460, duration: 0 },
                { id: "eid379", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 2820, duration: 0 },
                { id: "eid380", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 3320, duration: 0 },
                { id: "eid413", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 4560, duration: 0 },
                { id: "eid414", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 5060, duration: 0 },
                { id: "eid458", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 6420, duration: 0 },
                { id: "eid459", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 6920, duration: 0 },
                { id: "eid494", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 8320, duration: 0 },
                { id: "eid495", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 8820, duration: 0 },
                { id: "eid527", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 9816, duration: 0 },
                { id: "eid528", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 10316, duration: 0 },
                { id: "eid122", tween: [ "style", "${_segment1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid436", tween: [ "style", "${_segment1Copy4}", "display", 'block', { fromValue: 'none'}], position: 5560, duration: 0 },
                { id: "eid124", tween: [ "style", "${_segment1Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_segment1Copy7}", "display", 'block', { fromValue: 'none'}], position: 2820, duration: 0 },
                { id: "eid397", tween: [ "style", "${_segment1Copy7}", "display", 'none', { fromValue: 'block'}], position: 3320, duration: 0 },
                { id: "eid126", tween: [ "style", "${_segment1Copy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid431", tween: [ "style", "${_segment1Copy8}", "display", 'block', { fromValue: 'none'}], position: 4560, duration: 0 },
                { id: "eid432", tween: [ "style", "${_segment1Copy8}", "display", 'none', { fromValue: 'block'}], position: 5060, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Rectangle2}", "left", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
                { id: "eid369", tween: [ "style", "${_Rectangle2}", "left", '179px', { fromValue: '182px'}], position: 3320, duration: 0 },
                { id: "eid370", tween: [ "style", "${_Rectangle2}", "left", '182px', { fromValue: '179px'}], position: 3820, duration: 0 },
                { id: "eid403", tween: [ "style", "${_Rectangle2}", "left", '179px', { fromValue: '182px'}], position: 5060, duration: 0 },
                { id: "eid404", tween: [ "style", "${_Rectangle2}", "left", '182px', { fromValue: '179px'}], position: 5560, duration: 0 },
                { id: "eid196", tween: [ "style", "${_Rectangle4}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
                { id: "eid407", tween: [ "style", "${_Rectangle4}", "top", '37px', { fromValue: '40px'}], position: 5560, duration: 0 },
                { id: "eid408", tween: [ "style", "${_Rectangle4}", "top", '40px', { fromValue: '37px'}], position: 6060, duration: 0 },
                { id: "eid452", tween: [ "style", "${_Rectangle4}", "top", '37px', { fromValue: '40px'}], position: 6920, duration: 0 },
                { id: "eid453", tween: [ "style", "${_Rectangle4}", "top", '40px', { fromValue: '37px'}], position: 7420, duration: 0 },
                { id: "eid584", tween: [ "style", "${_segment1Copy16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid585", tween: [ "style", "${_segment1Copy16}", "display", 'block', { fromValue: 'none'}], position: 11266, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Rectangle2}", "top", '113px', { fromValue: '113px'}], position: 0, duration: 0 },
                { id: "eid367", tween: [ "style", "${_Rectangle2}", "top", '110px', { fromValue: '113px'}], position: 3320, duration: 0 },
                { id: "eid368", tween: [ "style", "${_Rectangle2}", "top", '113px', { fromValue: '110px'}], position: 3820, duration: 0 },
                { id: "eid401", tween: [ "style", "${_Rectangle2}", "top", '110px', { fromValue: '113px'}], position: 5060, duration: 0 },
                { id: "eid402", tween: [ "style", "${_Rectangle2}", "top", '113px', { fromValue: '110px'}], position: 5560, duration: 0 },
                { id: "eid211", tween: [ "style", "${_Rectangle5}", "left", '481px', { fromValue: '481px'}], position: 0, duration: 0 },
                { id: "eid541", tween: [ "style", "${_Rectangle5}", "left", '478px', { fromValue: '481px'}], position: 10316, duration: 0 },
                { id: "eid542", tween: [ "style", "${_Rectangle5}", "left", '481px', { fromValue: '478px'}], position: 10816, duration: 0 },
                { id: "eid577", tween: [ "style", "${_Rectangle5}", "left", '478px', { fromValue: '481px'}], position: 11266, duration: 0 },
                { id: "eid578", tween: [ "style", "${_Rectangle5}", "left", '481px', { fromValue: '478px'}], position: 11766, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Rectangle}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Rectangle}", "border-width", '3px', { fromValue: '0px'}], position: 270, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Rectangle}", "border-width", '0px', { fromValue: '3px'}], position: 770, duration: 0 },
                { id: "eid212", tween: [ "style", "${_Rectangle5}", "top", '137px', { fromValue: '137px'}], position: 0, duration: 0 },
                { id: "eid539", tween: [ "style", "${_Rectangle5}", "top", '134px', { fromValue: '137px'}], position: 10316, duration: 0 },
                { id: "eid540", tween: [ "style", "${_Rectangle5}", "top", '137px', { fromValue: '134px'}], position: 10816, duration: 0 },
                { id: "eid575", tween: [ "style", "${_Rectangle5}", "top", '134px', { fromValue: '137px'}], position: 11266, duration: 0 },
                { id: "eid576", tween: [ "style", "${_Rectangle5}", "top", '137px', { fromValue: '134px'}], position: 11766, duration: 0 },
                { id: "eid445", tween: [ "style", "${_segment1Copy15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid479", tween: [ "style", "${_segment1Copy15}", "display", 'block', { fromValue: 'none'}], position: 6920, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid342", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 1960, duration: 0 },
                { id: "eid343", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 2460, duration: 0 },
                { id: "eid383", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 2820, duration: 0 },
                { id: "eid384", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 3320, duration: 0 },
                { id: "eid417", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 4560, duration: 0 },
                { id: "eid418", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 5060, duration: 0 },
                { id: "eid462", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 6420, duration: 0 },
                { id: "eid463", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 6920, duration: 0 },
                { id: "eid498", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 8320, duration: 0 },
                { id: "eid499", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 8820, duration: 0 },
                { id: "eid531", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 9816, duration: 0 },
                { id: "eid532", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 10316, duration: 0 },
                { id: "eid189", tween: [ "style", "${_Rectangle4}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid411", tween: [ "style", "${_Rectangle4}", "border-width", '3px', { fromValue: '0px'}], position: 5560, duration: 0 },
                { id: "eid412", tween: [ "style", "${_Rectangle4}", "border-width", '0px', { fromValue: '3px'}], position: 6060, duration: 0 },
                { id: "eid456", tween: [ "style", "${_Rectangle4}", "border-width", '3px', { fromValue: '0px'}], position: 6920, duration: 0 },
                { id: "eid457", tween: [ "style", "${_Rectangle4}", "border-width", '0px', { fromValue: '3px'}], position: 7420, duration: 0 },
                { id: "eid125", tween: [ "style", "${_segment1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid398", tween: [ "style", "${_segment1Copy3}", "display", 'block', { fromValue: 'none'}], position: 3320, duration: 0 },
                { id: "eid205", tween: [ "style", "${_Rectangle5}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid543", tween: [ "style", "${_Rectangle5}", "border-width", '3px', { fromValue: '0px'}], position: 10316, duration: 0 },
                { id: "eid544", tween: [ "style", "${_Rectangle5}", "border-width", '0px', { fromValue: '3px'}], position: 10816, duration: 0 },
                { id: "eid579", tween: [ "style", "${_Rectangle5}", "border-width", '3px', { fromValue: '0px'}], position: 11266, duration: 0 },
                { id: "eid580", tween: [ "style", "${_Rectangle5}", "border-width", '0px', { fromValue: '3px'}], position: 11766, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-skyline4");
