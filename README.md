## Playing with Tesseract.js

To run:

```
npm i
node index.js
```

This is just a first attempt at getting image transcription to work.

### Chris Paul original image spit out this, 1st line is VERY accurate, the rest not so much

chris paul original
![CP3](https://i.imgur.com/ULlNBw2.png)

```
 1 4
 . . -
 o B — 2 : A
 o~ ! rjull ! “, R V) P
 L PAUL 7t
 \ SUNS 89
 ~ HEIGHT: 6'0" WEIGHT: 175LBS AGE: 35 PERSONALITY e
 ! | L R R T R T R U2 /e )
 PTS REB I STLS BLK L FG ki 3 OREB T
 36 39 2 6 3 0 3 12-17 5-8 10-11 0 3
 38 ) 6 J \ 1) . R 5 v U
 ki 7 ] 9 i) 2 /281 2-8 £ | 2
 ] 26 :] 1} 0 ) 9-20 v R 0 \
```

### Chris Paul black and white w/contrast curve applied, again 1st line very accurate due to highlight

bw w/contrast
![CP3](https://i.imgur.com/oT5IpQ2.png)

```
WERSIMPLEVEW i il R bt
e ) -
— . i R
e biss B 2
é: #3/ @E{]RIS & OVR
@ N A , 5 - TE_A_HA 2
4 ;,-) PAUL LT 89
i - HEIGHT: 6'0" WEIGHT:175LBS AGE: 35 PERSONALITY CAP_99
M. FROM: WAKE FOREST YEARS PRO:16 DRAFTED: R:1P:4(2005) UNPREDICTABI.E
DEQ RECENTCAMES @ reooo
M) 3] AST R BLK TO FG 3PT [ OREB 13RS
36 39 2 6 3 0 3 12-17 5-8 10=-11 0 3
ki 19 [} [} 1 0 4 8-16 1R 2-2 0 Vi
k1Y 1y Vi 9 3 0 4 7-15 Y] 1-2 1 3
] p1:] 9 10 3 0 A LRI YY) 6-6 0 1
R
```

### Chris Paul just stats, bw w/contrast, the line that was previously accurate is no longer super accurate

cropped to just stats, bw w/contrast
![CP3](https://i.imgur.com/AJIx2S2.png)

```
RS-t T N
ki 19 6 6 1 0 4 R[] B YE¥ 0 2
35 1 4 9 ] 0 [} 7-15 2-6 (¥ | 2
40 ri) :] 10 K] 0 4 9-20 2-7 6-6 0 |
```

### Chris Paul just stats, bw w/contrast then inverted

cropped to just stats, bw w/contrast then inverted
![CP3](https://i.imgur.com/qLuxipP.png)

first line has a highlight from being 'selected' and is the least accurate. the 3 remaining lines are perfect

```
36 39 2 3 K] 0 K] 12-17 5-8 LN 0 K]
38 19 6 6 1 0 4 8-16 1-5 2-2 0 2
35 17 7 9 3 0 4 7-15 2-6 1-2 1 2
40 26 9 10 3 0 4 9-20 2-7 6-6 0 1
```

### Chris Paul just stats, bw w/contrast, then inverted, and cropped out the highlighted bar

cropped to just stats, bw w/contrast then inverted just cropped out highlight bar
![CP3](https://i.imgur.com/1KxK1AY.png)

perfect transcription

```
38 19 6 6 1 0 4 8-16 1-5 2-2 0 2
35 17 7 9 3 0 4 7-15 2-6 1-2 1 2
40 26 9 10 3 0 4 9-20 2-7 6-6 0 1
```

** testing linear **
