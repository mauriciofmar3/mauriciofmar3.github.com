/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='../../images/';

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
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "width", '92px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '113px'],
                ["color", "background-color", 'rgba(73,78,255,1)'],
                ["style", "border-width", '0px'],
                ["style", "height", '202px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '182px'],
                ["style", "width", '110px']
            ],
            "${_segment1Copy2}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '146px'],
                ["style", "width", '36px']
            ],
            "${_segment1Copy9}": [
                ["style", "top", '110px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '256px'],
                ["style", "width", '36px']
            ],
            "${_segment1Copy16}": [
                ["style", "top", '134px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '525px'],
                ["style", "width", '157px']
            ],
            "${_segment1Copy8}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '256px'],
                ["style", "width", '36px']
            ],
            "${_segment1Copy15}": [
                ["style", "top", '37px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '292px'],
                ["style", "width", '90px']
            ],
            "${_segment1Copy5}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '382px'],
                ["style", "width", '99px']
            ],
            "${_segment1Copy11}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '292px'],
                ["style", "width", '90px']
            ],
            "${_Scan_line}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '315px'],
                ["style", "left", '0px'],
                ["style", "width", '1px']
            ],
            "${_segment1Copy7}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '182px'],
                ["style", "width", '74px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,73,73,1)'],
                ["style", "border-width", '0px'],
                ["style", "height", '238px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '28px'],
                ["style", "top", '77px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(0,185,11,1)'],
                ["style", "top", '40px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '256px'],
                ["style", "border-width", '0px']
            ],
            "${_segment1Copy6}": [
                ["style", "top", '134px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '481px'],
                ["style", "width", '44px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(249,73,255,1)'],
                ["style", "top", '187px'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '146px'],
                ["style", "width", '379px']
            ],
            "${_segment1Copy4}": [
                ["style", "top", '37px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '256px'],
                ["style", "width", '36px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '315px'],
                ["style", "width", '703px']
            ],
            "${_segment1Copy10}": [
                ["style", "top", '184px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "left", '481px'],
                ["style", "width", '44px']
            ],
            "${_segment1Copy3}": [
                ["style", "top", '110px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '182px'],
                ["style", "width", '74px']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,158,73,1)'],
                ["style", "top", '137px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '481px'],
                ["style", "border-width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid97", tween: [ "style", "${_Scan_line}", "left", '702px', { fromValue: '0px'}], position: 0, duration: 3500 },
                { id: "eid589", tween: [ "style", "${_Scan_line}", "left", '702px', { fromValue: '0px'}], position: 3500, duration: 3500 },
                { id: "eid590", tween: [ "style", "${_Scan_line}", "left", '702px', { fromValue: '0px'}], position: 7000, duration: 3500 },
                { id: "eid591", tween: [ "style", "${_Scan_line}", "left", '702px', { fromValue: '0px'}], position: 10500, duration: 3500 },
                { id: "eid592", tween: [ "style", "${_Scan_line}", "left", '702px', { fromValue: '0px'}], position: 14000, duration: 3500 },
                { id: "eid123", tween: [ "style", "${_segment1Copy11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid595", tween: [ "style", "${_segment1Copy11}", "display", 'block', { fromValue: 'none'}], position: 4956, duration: 0 },
                { id: "eid604", tween: [ "style", "${_segment1Copy11}", "display", 'none', { fromValue: 'block'}], position: 11958, duration: 0 },
                { id: "eid205", tween: [ "style", "${_Rectangle5}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Rectangle5}", "border-width", '3px', { fromValue: '0px'}], position: 14000, duration: 0 },
                { id: "eid222", tween: [ "style", "${_Rectangle5}", "border-width", '0px', { fromValue: '3px'}], position: 17500, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Rectangle}", "left", '25px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Rectangle}", "left", '28px', { fromValue: '25px'}], position: 3500, duration: 0 },
                { id: "eid117", tween: [ "style", "${_segment1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_segment1}", "display", 'block', { fromValue: 'none'}], position: 270, duration: 0 },
                { id: "eid121", tween: [ "style", "${_segment1Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid596", tween: [ "style", "${_segment1Copy5}", "display", 'block', { fromValue: 'none'}], position: 5400, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Rectangle2}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Rectangle2}", "border-width", '3px', { fromValue: '0px'}], position: 7000, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Rectangle2}", "border-width", '0px', { fromValue: '3px'}], position: 10500, duration: 0 },
                { id: "eid445", tween: [ "style", "${_segment1Copy15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid605", tween: [ "style", "${_segment1Copy15}", "display", 'block', { fromValue: 'none'}], position: 11958, duration: 0 },
                { id: "eid212", tween: [ "style", "${_Rectangle5}", "top", '137px', { fromValue: '137px'}], position: 0, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Rectangle5}", "top", '134px', { fromValue: '137px'}], position: 14000, duration: 0 },
                { id: "eid221", tween: [ "style", "${_Rectangle5}", "top", '137px', { fromValue: '134px'}], position: 17500, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Rectangle}", "border-width", '3px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Rectangle}", "border-width", '0px', { fromValue: '3px'}], position: 3500, duration: 0 },
                { id: "eid211", tween: [ "style", "${_Rectangle5}", "left", '481px', { fromValue: '481px'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Rectangle5}", "left", '478px', { fromValue: '481px'}], position: 14000, duration: 0 },
                { id: "eid220", tween: [ "style", "${_Rectangle5}", "left", '481px', { fromValue: '478px'}], position: 17500, duration: 0 },
                { id: "eid118", tween: [ "style", "${_segment1Copy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid597", tween: [ "style", "${_segment1Copy10}", "display", 'block', { fromValue: 'none'}], position: 5900, duration: 0 },
                { id: "eid606", tween: [ "style", "${_segment1Copy10}", "display", 'none', { fromValue: 'block'}], position: 16380, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Rectangle}", "top", '74px', { fromValue: '77px'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Rectangle}", "top", '77px', { fromValue: '74px'}], position: 3500, duration: 0 },
                { id: "eid124", tween: [ "style", "${_segment1Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid593", tween: [ "style", "${_segment1Copy7}", "display", 'block', { fromValue: 'none'}], position: 4400, duration: 0 },
                { id: "eid598", tween: [ "style", "${_segment1Copy7}", "display", 'none', { fromValue: 'block'}], position: 7890, duration: 0 },
                { id: "eid195", tween: [ "style", "${_Rectangle4}", "left", '256px', { fromValue: '256px'}], position: 0, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Rectangle4}", "left", '253px', { fromValue: '256px'}], position: 10500, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Rectangle4}", "left", '256px', { fromValue: '253px'}], position: 14000, duration: 0 },
                { id: "eid196", tween: [ "style", "${_Rectangle4}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_Rectangle4}", "top", '37px', { fromValue: '40px'}], position: 10500, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Rectangle4}", "top", '40px', { fromValue: '37px'}], position: 14000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_segment1Copy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid594", tween: [ "style", "${_segment1Copy8}", "display", 'block', { fromValue: 'none'}], position: 4780, duration: 0 },
                { id: "eid600", tween: [ "style", "${_segment1Copy8}", "display", 'none', { fromValue: 'block'}], position: 8270, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Rectangle2}", "left", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Rectangle2}", "left", '179px', { fromValue: '182px'}], position: 7000, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Rectangle2}", "left", '182px', { fromValue: '179px'}], position: 10500, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '187px'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Rectangle3}", "top", '184px', { fromValue: '187px'}], position: 3500, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Rectangle3}", "top", '187px', { fromValue: '184px'}], position: 7000, duration: 0 },
                { id: "eid584", tween: [ "style", "${_segment1Copy16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid608", tween: [ "style", "${_segment1Copy16}", "display", 'block', { fromValue: 'none'}], position: 16620, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Rectangle2}", "top", '113px', { fromValue: '113px'}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Rectangle2}", "top", '110px', { fromValue: '113px'}], position: 7000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_Rectangle2}", "top", '113px', { fromValue: '110px'}], position: 10500, duration: 0 },
                { id: "eid120", tween: [ "style", "${_segment1Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid607", tween: [ "style", "${_segment1Copy6}", "display", 'block', { fromValue: 'none'}], position: 16380, duration: 0 },
                { id: "eid119", tween: [ "style", "${_segment1Copy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid601", tween: [ "style", "${_segment1Copy9}", "display", 'block', { fromValue: 'none'}], position: 8270, duration: 0 },
                { id: "eid602", tween: [ "style", "${_segment1Copy9}", "display", 'none', { fromValue: 'block'}], position: 11760, duration: 0 },
                { id: "eid127", tween: [ "style", "${_segment1Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_segment1Copy2}", "display", 'block', { fromValue: 'none'}], position: 4210, duration: 0 },
                { id: "eid122", tween: [ "style", "${_segment1Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid603", tween: [ "style", "${_segment1Copy4}", "display", 'block', { fromValue: 'none'}], position: 11760, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_Rectangle3}", "border-width", '3px', { fromValue: '0px'}], position: 3500, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Rectangle3}", "border-width", '0px', { fromValue: '3px'}], position: 7000, duration: 0 },
                { id: "eid189", tween: [ "style", "${_Rectangle4}", "border-width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "style", "${_Rectangle4}", "border-width", '3px', { fromValue: '0px'}], position: 10500, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Rectangle4}", "border-width", '0px', { fromValue: '3px'}], position: 14000, duration: 0 },
                { id: "eid125", tween: [ "style", "${_segment1Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid599", tween: [ "style", "${_segment1Copy3}", "display", 'block', { fromValue: 'none'}], position: 7890, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Rectangle3}", "left", '143px', { fromValue: '146px'}], position: 3500, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Rectangle3}", "left", '146px', { fromValue: '143px'}], position: 7000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-skyline6");
