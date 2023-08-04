import { OpenAIEmbeddings } from "langchain/embeddings/openai";

/* Create instance */
const embeddings = new OpenAIEmbeddings();

/* Embed queries */
const getEmbeddings = await embeddings.embedQuery("Hello world");
/*
[
   -0.004845875,   0.004899438,  -0.016358767,  -0.024475135, -0.017341806,
    0.012571548,  -0.019156644,   0.009036391,  -0.010227379, -0.026945334,
    0.022861943,   0.010321903,  -0.023479493, -0.0066544134,  0.007977734,
   0.0026371893,   0.025206111,  -0.012048521,   0.012943339,  0.013094575,
   -0.010580265,  -0.003509951,   0.004070787,   0.008639394, -0.020631202,
  -0.0019203906,   0.012161949,  -0.019194454,   0.030373365, -0.031028723,
   0.0036170771,  -0.007813894, -0.0060778237,  -0.017820721, 0.0048647798,
   -0.015640393,   0.001373733,  -0.015552171,   0.019534737, -0.016169721,
    0.007316074,   0.008273906,   0.011418369,   -0.01390117, -0.033347685,
    0.011248227,  0.0042503807,  -0.012792102, -0.0014595914,  0.028356876,
    0.025407761, 0.00076445413,  -0.016308354,   0.017455231, -0.016396577,
    0.008557475,   -0.03312083,   0.031104341,   0.032389853,  -0.02132437,
    0.003324056,  0.0055610985, -0.0078012915,   0.006090427, 0.0062038545,
      0.0169133,  0.0036391325,  0.0076815626,  -0.018841568,  0.026037913,
    0.024550753,  0.0055264398, -0.0015824712, -0.0047765584,  0.018425668,
   0.0030656934, -0.0113742575, -0.0020322427,   0.005069579, 0.0022701253,
    0.036095154,  -0.027449455,  -0.008475555,   0.015388331,  0.018917186,
   0.0018999106,  -0.003349262,   0.020895867,  -0.014480911, -0.025042271,
    0.012546342,   0.013850759,  0.0069253794,   0.008588983, -0.015199285,
  -0.0029585673,  -0.008759124,   0.016749462,   0.004111747,  -0.04804285,
  ... 1436 more items
]
*/

/* Embed documents */
const documentEmbeddings = await embeddings.embedDocuments([
  "Hello world",
  "Bye bye",
]);
/*
[
  [
    -0.0047852774,  0.0048640342,   -0.01645707,  -0.024395779, -0.017263541,
      0.012512918,  -0.019191515,   0.009053908,  -0.010213212, -0.026890801,
      0.022883644,   0.010251015,  -0.023589306,  -0.006584088,  0.007989113,
      0.002720268,   0.025088841,  -0.012153786,   0.012928754,  0.013054766,
      -0.010395928, -0.0035566676,  0.0040008575,   0.008600268, -0.020678446,
    -0.0019106456,   0.012178987,  -0.019241918,   0.030444318,  -0.03102397,
      0.0035692686,  -0.007749692,   -0.00604854,   -0.01781799,  0.004860884,
      -0.015612794,  0.0014097509,  -0.015637996,   0.019443536,  -0.01612944,
      0.0072960514,   0.008316742,   0.011548932,  -0.013987249,  -0.03336778,
      0.011341013,    0.00425603, -0.0126578305, -0.0013861238,  0.028302127,
      0.025466874,  0.0007029065,  -0.016318457,   0.017427357, -0.016394064,
      0.008499459,  -0.033241767,   0.031200387,    0.03238489,   -0.0212833,
      0.0032416396,   0.005443686,  -0.007749692,  0.0060201874,  0.006281661,
      0.016923312,   0.003528315,  0.0076740854,   -0.01881348,  0.026109532,
      0.024660403,   0.005472039, -0.0016712243, -0.0048136297,  0.018397642,
      0.003011669,  -0.011385117, -0.0020193304,   0.005138109, 0.0022335495,
        0.03603922,  -0.027495656,  -0.008575066,   0.015436378,  0.018851284,
      0.0018019609, -0.0034338066,    0.02094307,  -0.014503895, -0.024950229,
      0.012632628,   0.013735226,  0.0069936244,   0.008575066, -0.015196957,
    -0.0030541976,  -0.008745181,   0.016746895,  0.0040481114, -0.048010286,
    ... 1436 more items
  ],
  [
      -0.009446913,  -0.013253193,   0.013174579,  0.0057552797,  -0.038993083,
      0.0077763423,    -0.0260478, -0.0114384955, -0.0022683728,  -0.016509168,
      0.041797023,    0.01787183,    0.00552271, -0.0049789557,   0.018146982,
      -0.01542166,   0.033752076,   0.006112323,   0.023872782,  -0.016535373,
      -0.006623321,   0.016116094, -0.0061090477, -0.0044155475,  -0.016627092,
      -0.022077737, -0.0009286407,   -0.02156674,   0.011890532,  -0.026283644,
        0.02630985,   0.011942943,  -0.026126415,  -0.018264906,  -0.014045896,
      -0.024187243,  -0.019037955,  -0.005037917,   0.020780588, -0.0049527506,
      0.002399398,   0.020767486,  0.0080908025,  -0.019666875,  -0.027934562,
      0.017688395,   0.015225122,  0.0046186363, -0.0045007137,   0.024265857,
        0.03244183,  0.0038848957,   -0.03244183,  -0.018893827, -0.0018065092,
      0.023440398,  -0.021763276,   0.015120302,   -0.01568371,  -0.010861984,
      0.011739853,  -0.024501702,  -0.005214801,   0.022955606,   0.001315165,
      -0.00492327,  0.0020358032,  -0.003468891,  -0.031079166,  0.0055259857,
      0.0028547104,   0.012087069,   0.007992534, -0.0076256637,   0.008110457,
      0.002998838,  -0.024265857,   0.006977089,  -0.015185814, -0.0069115767,
      0.006466091,  -0.029428247,  -0.036241557,   0.036713246,   0.032284595,
    -0.0021144184,  -0.014255536,   0.011228855,  -0.027227025,  -0.021619149,
    0.00038242966,    0.02245771, -0.0014748519,    0.01573612,  0.0041010873,
      0.006256451,  -0.007992534,   0.038547598,   0.024658933,  -0.012958387,
    ... 1436 more items
  ]
]
*/

export { getEmbeddings, documentEmbeddings };
