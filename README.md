# ChristmaSelfies
Christmas Face Generator built using Microsoft Azure Face API!

We built this  **ChristmaSelfies** Festive Face generator live on Twitch for Coding Cafe during a sponsored stream by [Microsoft Azure](https://aka.ms/instafluff-social)!

## Instructions ##

### Create an Azure Face Cognitive Services Resource ###
1. Clone this repository and then install dependencies using `npm install`
2. Create an Azure Face Cognitive Services Resource from the Portal [https://portal.azure.com](https://portal.azure.com) and copy the API Key.
3. Create a file named `.env` that looks like this and paste in the API Key:
```javascript
AZURE_FACE_API_KEY=[YOUR-API-KEY-HERE] # e.g. AZURE_FACE_API_KEY=kjh12bn1hsj78445234
```
4. Update the **faceImage** URL to any face image in `index.html` like:

```javascript
var faceImage=[Image URL];
```

6. Run the project with `node index.js` and then open [http://localhost:1225](http://localhost:1225) in a web browser. Done!

## Instafluff ##
> *Like these projects? The best way to support my open-source projects is by becoming a Comfy Sponsor on GitHub!*

> https://github.com/sponsors/instafluff

> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

## Credits ##
Thanks to everyone who participated in the making of our Festive Faces Generator using Azure Face API!

**Instafluff, atel0s, BungalowGlow, grallih, Tastypeachstudios, Gilokk0, PhysoTronic, opti_21, wabes1, sparky_pugwash, CraftingForIntroverts, pipskidoodle, Linol_Shadowcat, PatrikComposer, LilyHazel, WOOKIE_SLAYR, Atndesign, Dexqyen, atd285, blueshark73, cloudhawke13, That_MS_Gamer, mcgeorgeofthejungle, ph1lt0r_and_lala, KappaMangos, SourBeers, i_am_from_mars, DEAD_P1XL, shaayan, Luxadin, julieee22, neniltheelf, TheHugoDahl, Stelzi79, comps4food, Lonster, CloudyNJ, Sukaiberu, csharpfritz, djbass101, JohanB, smabUK, vile, GlitterholicDreamz, ummmheck, bhaadman, 10TenArt, codeaurora, cotoli, Lunnaku, guthron, Procelsior, merkurrz, Wasabi_Cheetah, TheNutellaOreo, Agent_Merlin, codesillystuff, valcob, CrimsonKnightZero, JoeShimHae, SuccessfulDan, nureddinbedevi, MaryJoStaebler, vision_shooa, holloway87, DutchGamer46, aisu__kurimU, mikamuka, ShinSharkai, FuriousFur, z1nt3k, wietlol, ruandersMSFT**
