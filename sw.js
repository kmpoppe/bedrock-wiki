if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.md.79378ce9.js",revision:"394d76f58a7dded75364815aee3030da"},{url:"assets/404.md.79378ce9.lean.js",revision:"af482689fffde110d90dc7111de2fd20"},{url:"assets/AlgoliaSearch.61a4c79f.js",revision:"aaaa6402c085cc040bc60636c3a49631"},{url:"assets/animation-controllers_afk-animation-controller.md.5bffa3c0.js",revision:"0443aea3ff0c147aff79ea60b3bf8207"},{url:"assets/animation-controllers_afk-animation-controller.md.5bffa3c0.lean.js",revision:"e42ccb5ed56f308f005e543cf0326421"},{url:"assets/animation-controllers_animation-controllers.md.5c28d2ba.js",revision:"3d1618123e37a5378aefff93442ced5d"},{url:"assets/animation-controllers_animation-controllers.md.5c28d2ba.lean.js",revision:"3d1618123e37a5378aefff93442ced5d"},{url:"assets/animation-controllers_death-commands.md.2f201538.js",revision:"3a7def0fa2f536c932a3afb7b64e3a9d"},{url:"assets/animation-controllers_death-commands.md.2f201538.lean.js",revision:"3e82033dc65e278fd9951bccf3900de8"},{url:"assets/animation-controllers_entity-commands.md.e7371d0b.js",revision:"e21b788b16ea255e89441c4c65960333"},{url:"assets/animation-controllers_entity-commands.md.e7371d0b.lean.js",revision:"cc4c53c1e0e2127669abd87a0bad5bec"},{url:"assets/animation-controllers_index.md.dea9f502.js",revision:"eee89d9d16ccea8b671b2d7d18961614"},{url:"assets/animation-controllers_index.md.dea9f502.lean.js",revision:"eee89d9d16ccea8b671b2d7d18961614"},{url:"assets/animation-controllers_respawn-commands.md.032810d4.js",revision:"db2490c4c968989e7f43ef78842fdafb"},{url:"assets/animation-controllers_respawn-commands.md.032810d4.lean.js",revision:"f52feac486fe35e2973511e32aa2ea7e"},{url:"assets/app.607ab0b3.js",revision:"12027b22fb2ad56beb54745f95b339f6"},{url:"assets/behavior_pack_applied.f329cc9a.js",revision:"a1ba2e5fc8ce09892852e3e7151cb27d"},{url:"assets/blocks_block-materials.md.7a33a746.js",revision:"372eb9a12d0c0e7cf8c389e45678e15b"},{url:"assets/blocks_block-materials.md.7a33a746.lean.js",revision:"203dc5552df0997a57a363f06b5397f7"},{url:"assets/blocks_block-shapes.md.e1ee43db.js",revision:"019945ac73037a8024eed09dde993562"},{url:"assets/blocks_block-shapes.md.e1ee43db.lean.js",revision:"338439005a0ce756b124ae2eac6f4f83"},{url:"assets/blocks_block-tags.md.9efc8267.js",revision:"6c2bd0443322c90256d78ef8dedc44fc"},{url:"assets/blocks_block-tags.md.9efc8267.lean.js",revision:"3c9955c3cf1939eb66745002eecee2c5"},{url:"assets/blocks_block-texture-variation.md.08700bb5.js",revision:"38ee30ed9332b6e3677a9b7e121fe94b"},{url:"assets/blocks_block-texture-variation.md.08700bb5.lean.js",revision:"f22daa57078ff7148e6c101274a673ff"},{url:"assets/blocks_documentation.md.43646550.js",revision:"71913c936d3fd3665077ce919fdb8c91"},{url:"assets/blocks_documentation.md.43646550.lean.js",revision:"3b7ac8904be5d63651bf0dd84a4223e0"},{url:"assets/blocks_fake-blocks.md.ec30455d.js",revision:"b072002628afbff27cc965ed0d3cd502"},{url:"assets/blocks_fake-blocks.md.ec30455d.lean.js",revision:"2b313de5c3ba3cde6a16290f5e18c294"},{url:"assets/blocks_guide.md.4febe39a.js",revision:"72a0dc5a504d689b7c4693c993998f89"},{url:"assets/blocks_guide.md.4febe39a.lean.js",revision:"72a0dc5a504d689b7c4693c993998f89"},{url:"assets/blocks_index.md.12bd9988.js",revision:"24ee9d7c9e2d776417308b6534335c6d"},{url:"assets/blocks_index.md.12bd9988.lean.js",revision:"24ee9d7c9e2d776417308b6534335c6d"},{url:"assets/commands_beginner-commands.md.d59c42c5.js",revision:"8d44969cca34420d3121a45780a516bf"},{url:"assets/commands_beginner-commands.md.d59c42c5.lean.js",revision:"738600c284f0c4a1eb76bb41197f9adb"},{url:"assets/commands_index.md.af524cfa.js",revision:"c02b7bf49b94aec3530de10d926ff736"},{url:"assets/commands_index.md.af524cfa.lean.js",revision:"c02b7bf49b94aec3530de10d926ff736"},{url:"assets/commands_mcfunction.md.6d2c897d.js",revision:"2da0242aeb66f6757e603d5a7c318a2f"},{url:"assets/commands_mcfunction.md.6d2c897d.lean.js",revision:"ea648ad3d2d1db9151d227c0bf762753"},{url:"assets/commands_nbt-commands.md.916f1e20.js",revision:"b3b64d9beecc6a91af59fd948d5d8795"},{url:"assets/commands_nbt-commands.md.916f1e20.lean.js",revision:"9982894015815782ca10e9551df6f248"},{url:"assets/concepts_bedrock-modeling.md.7e94f7a8.js",revision:"f23d1be7ca4701cdf192b2827cc5d110"},{url:"assets/concepts_bedrock-modeling.md.7e94f7a8.lean.js",revision:"9ae1c390002f228b78c2c4703cedc820"},{url:"assets/concepts_entity-properties.md.e628f629.js",revision:"1b8a51f8e72d388180fd6c250036f545"},{url:"assets/concepts_entity-properties.md.e628f629.lean.js",revision:"1fe7e37dbf33195a57c20d009292472e"},{url:"assets/concepts_format-version.md.469c607f.js",revision:"672d1b84fca7b981f98f992995dcfbea"},{url:"assets/concepts_format-version.md.469c607f.lean.js",revision:"3cc2ce9bc538d87ed4a926a2aa9c5c5a"},{url:"assets/concepts_index.md.9a3d476a.js",revision:"c2430217e8842e5860bf708664841cbd"},{url:"assets/concepts_index.md.9a3d476a.lean.js",revision:"c2430217e8842e5860bf708664841cbd"},{url:"assets/concepts_json-ui.md.245ee584.js",revision:"a8d7934f1dc6060eb36cc85ee3b11425"},{url:"assets/concepts_json-ui.md.245ee584.lean.js",revision:"ab05b9d75d48393bdd386af2120ab828"},{url:"assets/concepts_lang.md.d5a06069.js",revision:"39c4e4519aa1ba5aa2db345c7b5eaa47"},{url:"assets/concepts_lang.md.d5a06069.lean.js",revision:"563ea77f9ef1c9eebb5f21cff52387f7"},{url:"assets/concepts_materials.md.40c7a3da.js",revision:"3f73926cced4b0f462a914e559176d11"},{url:"assets/concepts_materials.md.40c7a3da.lean.js",revision:"2985eedc353649004cfa84db752df734"},{url:"assets/concepts_math-based-animations.md.95f8eb3d.js",revision:"bd281960515cbf9e36ee0f43576e4f56"},{url:"assets/concepts_math-based-animations.md.95f8eb3d.lean.js",revision:"7442b9791a75822649bd04f3b8248cb3"},{url:"assets/concepts_mcstructure.md.d5d1cd7e.js",revision:"31eb93f3c6ba0742d145534e940ab1ae"},{url:"assets/concepts_mcstructure.md.d5d1cd7e.lean.js",revision:"d7fef45deb370854d11a486d05b33483"},{url:"assets/concepts_namespaces.md.07ef51cf.js",revision:"4d385cea6ebb2e8d03f2de53103f0628"},{url:"assets/concepts_namespaces.md.07ef51cf.lean.js",revision:"73a9ae196696d8e0e7dde282f82abfdb"},{url:"assets/concepts_render-controller.md.cff3496b.js",revision:"cce0cbdb32baa42255d5f969bb3fb9ac"},{url:"assets/concepts_render-controller.md.cff3496b.lean.js",revision:"b0d6e59fae012a08b0931f89e42b8e44"},{url:"assets/concepts_shaders.md.c494576a.js",revision:"c77b01de07ea27359eb23b1061a0b45d"},{url:"assets/concepts_shaders.md.c494576a.lean.js",revision:"c77b01de07ea27359eb23b1061a0b45d"},{url:"assets/concepts_sounds.md.4ef4d37f.js",revision:"aa8ae7ffb325135213b43e1d9108634b"},{url:"assets/concepts_sounds.md.4ef4d37f.lean.js",revision:"5a9d0508842ed3a8ca58daff5896fbc2"},{url:"assets/concepts_textures-list.md.518ee3d3.js",revision:"b270b0fcab8dfec9533165196ada9653"},{url:"assets/concepts_textures-list.md.518ee3d3.lean.js",revision:"538508c6b38d98b854635661a188520e"},{url:"assets/contribute.md.b21db78f.js",revision:"f6db1271d2b69f15c78c11161bb25ded"},{url:"assets/contribute.md.b21db78f.lean.js",revision:"43a13468047939d460342b787a79e614"},{url:"assets/create_entity_animation_4.4fc3d031.js",revision:"fd1b2a78670ab2b86267b6143ac801fb"},{url:"assets/discord.md.858e5b72.js",revision:"f4c525ba4011ea242f009402899079f0"},{url:"assets/discord.md.858e5b72.lean.js",revision:"f4c525ba4011ea242f009402899079f0"},{url:"assets/documentation_color-codes.md.31439f43.js",revision:"d0c11cb6a25e36c2ac26a3ec4ea0e15d"},{url:"assets/documentation_color-codes.md.31439f43.lean.js",revision:"40aeb3066cb344644be9f8c218c06e76"},{url:"assets/documentation_dummy-components.md.504e9873.js",revision:"75e702cdd073d1c1eaae5bd6b94bb694"},{url:"assets/documentation_dummy-components.md.504e9873.lean.js",revision:"c66748d3f4450e8f48755c66c36c0dba"},{url:"assets/documentation_emojis.md.74906bcc.js",revision:"38bc6591995eb635924869750b7375fc"},{url:"assets/documentation_emojis.md.74906bcc.lean.js",revision:"38bc6591995eb635924869750b7375fc"},{url:"assets/documentation_fog-ids.md.d0df12a2.js",revision:"a75a0a334bc91f5e112be749082ad9eb"},{url:"assets/documentation_fog-ids.md.d0df12a2.lean.js",revision:"fb978f962307482e3e619df3ec084d33"},{url:"assets/documentation_index.md.8cf29aec.js",revision:"567e80010a3190c789185b1d6314729c"},{url:"assets/documentation_index.md.8cf29aec.lean.js",revision:"567e80010a3190c789185b1d6314729c"},{url:"assets/documentation_json-ui.md.29a49a8d.js",revision:"06856c877ec6c0ec2e0d9d535c92b473"},{url:"assets/documentation_json-ui.md.29a49a8d.lean.js",revision:"80645ab0b1ef35b3fd2764b1b634ee3f"},{url:"assets/documentation_materials.md.092f2bc4.js",revision:"7e48da245839effb944e990919cfde0d"},{url:"assets/documentation_materials.md.092f2bc4.lean.js",revision:"053c8ce082d81b89ee93d8e649c9015f"},{url:"assets/documentation_particles.md.a242d83f.js",revision:"dc37baa6fe7d892ebd33b5d56d209289"},{url:"assets/documentation_particles.md.a242d83f.lean.js",revision:"621da42aa354ffde2677031243a09822"},{url:"assets/documentation_projectiles.md.47c9f205.js",revision:"534dcfebfdf08ded7758645d7719592b"},{url:"assets/documentation_projectiles.md.47c9f205.lean.js",revision:"8afc4c327e7ea1c0e1aefb6cc2845d55"},{url:"assets/documentation_queries.md.e64d3018.js",revision:"a3525b9bd696b1938fb61ccebd85fe81"},{url:"assets/documentation_queries.md.e64d3018.lean.js",revision:"70626bf7fff166bb67c5750421c19e56"},{url:"assets/documentation_runtime-identifier.md.1985f813.js",revision:"6e0f144ae5eb8d71244d722b951362b0"},{url:"assets/documentation_runtime-identifier.md.1985f813.lean.js",revision:"3b5b151e174e8368d50f502d95051da7"},{url:"assets/documentation_sound-definitions.md.6ffe5cfc.js",revision:"9117a70f3501503ff7892bf64cb4fab9"},{url:"assets/documentation_sound-definitions.md.6ffe5cfc.lean.js",revision:"08e3648060ef3288b8abda283565c2d9"},{url:"assets/documentation_subpacks.md.6b9febeb.js",revision:"50fa77fe455510d5b771861b3363d6dc"},{url:"assets/documentation_subpacks.md.6b9febeb.lean.js",revision:"2e599f3f85fdf05489260eae505b6f9f"},{url:"assets/documentation_tellraw.md.4d2e5053.js",revision:"04cd77255ae5e799450bb5f85ed563bb"},{url:"assets/documentation_tellraw.md.4d2e5053.lean.js",revision:"04cd77255ae5e799450bb5f85ed563bb"},{url:"assets/entities_boat-entities.md.8af844a5.js",revision:"dd1912601d23181aa887ef013df97ac0"},{url:"assets/entities_boat-entities.md.8af844a5.lean.js",revision:"2c6ab94388c0fec62b95477d74877d92"},{url:"assets/entities_cancelling-death-animations.md.83769324.js",revision:"5d024fd030fcf3db4378f92c1e1e59c8"},{url:"assets/entities_cancelling-death-animations.md.83769324.lean.js",revision:"19c78a2fd535d750c9ed659bfee7f7b4"},{url:"assets/entities_components-events-groups.md.e8c23c0d.js",revision:"0e6edd36606b65f73109c0b272dea9e5"},{url:"assets/entities_components-events-groups.md.e8c23c0d.lean.js",revision:"d5bed7a99552f5c55b6fc8fe5829084b"},{url:"assets/entities_dummy-entities.md.06bf9c5e.js",revision:"fdfe21964c5bdf0059d090b7379619f1"},{url:"assets/entities_dummy-entities.md.06bf9c5e.lean.js",revision:"b5ee2a2b9379189251364e4a68539519"},{url:"assets/entities_entity-events.md.14ac4396.js",revision:"998558dcdeb293b7390bb81284ab053b"},{url:"assets/entities_entity-events.md.14ac4396.lean.js",revision:"8513d5ac4db00c51b2188066417471a8"},{url:"assets/entities_entity-holds-item.md.2dae0597.js",revision:"b99730f2ce882739dee6ed111eecb7e5"},{url:"assets/entities_entity-holds-item.md.2dae0597.lean.js",revision:"b99730f2ce882739dee6ed111eecb7e5"},{url:"assets/entities_entity-movement.md.3ea81a5d.js",revision:"178b57b16b32ab7fff95e7f7aa0668ae"},{url:"assets/entities_entity-movement.md.3ea81a5d.lean.js",revision:"50290e5305af834bfafbbe5362daf372"},{url:"assets/entities_entity-troubleshooting.md.475e593b.js",revision:"f8ad2d94d2348d7e7df5a5f6fe03920a"},{url:"assets/entities_entity-troubleshooting.md.475e593b.lean.js",revision:"ea864f5c1d89060b79a3be06afcfff9e"},{url:"assets/entities_flying-entities.md.7c5b21ad.js",revision:"8b7facb9b294b8998a6784d1de885006"},{url:"assets/entities_flying-entities.md.7c5b21ad.lean.js",revision:"f0b6d6a5d91f08194a7bd4b9606d6d29"},{url:"assets/entities_index.md.40fd5739.js",revision:"437d8564f76bd05db1abad6f2e5eb6b2"},{url:"assets/entities_index.md.40fd5739.lean.js",revision:"437d8564f76bd05db1abad6f2e5eb6b2"},{url:"assets/entities_invulnerable-entities.md.5274d580.js",revision:"c19ee340117233c523654ba2e75fcebf"},{url:"assets/entities_invulnerable-entities.md.5274d580.lean.js",revision:"b719dc72589b65aadf49b915f788d261"},{url:"assets/entities_pathfinding-entities.md.2b820747.js",revision:"f1f87a5b65089df83a47fdd462294171"},{url:"assets/entities_pathfinding-entities.md.2b820747.lean.js",revision:"bf66d0832396c9e172422e794609e3d4"},{url:"assets/entities_render-controller.md.75313f61.js",revision:"b57feb0416e188352956995ea972751a"},{url:"assets/entities_render-controller.md.75313f61.lean.js",revision:"1c565d621083946d33393c270bf249eb"},{url:"assets/entities_solid-entities.md.e091bad5.js",revision:"6ae28819d652b88aedae1a06177a1f1a"},{url:"assets/entities_solid-entities.md.e091bad5.lean.js",revision:"237877e6ec98c968defeaf6dccb62424"},{url:"assets/entities_timers.md.1613508c.js",revision:"4129c6bd3c3785e1738906040bd8084a"},{url:"assets/entities_timers.md.1613508c.lean.js",revision:"ef4dca9925903822b63d9135e5e10301"},{url:"assets/guide_appendix.md.77fea09f.js",revision:"5baeb00c8c50ddabc9e33d988bb99288"},{url:"assets/guide_appendix.md.77fea09f.lean.js",revision:"c7e89bb80a49345ee8de16a7105c5792"},{url:"assets/guide_creating-entity-visuals.md.ad9aef5e.js",revision:"1dbea4c53ae62ef692293f771daac516"},{url:"assets/guide_creating-entity-visuals.md.ad9aef5e.lean.js",revision:"1dbea4c53ae62ef692293f771daac516"},{url:"assets/guide_custom-entity-full.md.77095f44.js",revision:"02b5fa9a52c12238358d651b2cf85221"},{url:"assets/guide_custom-entity-full.md.77095f44.lean.js",revision:"02b5fa9a52c12238358d651b2cf85221"},{url:"assets/guide_custom-particles.md.b868bf97.js",revision:"91ffd8ee30a6820b0e4f018b8e87fe17"},{url:"assets/guide_custom-particles.md.b868bf97.lean.js",revision:"91ffd8ee30a6820b0e4f018b8e87fe17"},{url:"assets/guide_custom-skin-packs.md.c7fa88ef.js",revision:"0d95877732800fce05962832520172f4"},{url:"assets/guide_custom-skin-packs.md.c7fa88ef.lean.js",revision:"0d6d7fa3da0398588755698d3f244d92"},{url:"assets/guide_custom-trades.md.1a504ca3.js",revision:"bb44161838d045ed64bc33acb765ac4b"},{url:"assets/guide_custom-trades.md.1a504ca3.lean.js",revision:"bb44161838d045ed64bc33acb765ac4b"},{url:"assets/guide_download-packs.md.2927d44a.js",revision:"a11cccba12dfe081c0e5ed1553e509ca"},{url:"assets/guide_download-packs.md.2927d44a.lean.js",revision:"123fcc99ae17d4942adc368857ac2857"},{url:"assets/guide_index.md.700e011a.js",revision:"2a26afaddd054743c803919abc32d6f0"},{url:"assets/guide_index.md.700e011a.lean.js",revision:"e6caedd76275a02ac2a77b837eb25205"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.bad83d6c.js",revision:"ded169008d404269bb62f2436dc6aab2"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.bad83d6c.lean.js",revision:"8bb1051f16b08cb5844343d8da09ff55"},{url:"assets/guide_project-setup.md.e50298d9.js",revision:"9cfa53be545b3b746acb634e33ce8522"},{url:"assets/guide_project-setup.md.e50298d9.lean.js",revision:"9cfa53be545b3b746acb634e33ce8522"},{url:"assets/guide_render-controllers.md.25c6b377.js",revision:"e57253064b6c74b543a0230b4f82e23e"},{url:"assets/guide_render-controllers.md.25c6b377.lean.js",revision:"e57253064b6c74b543a0230b4f82e23e"},{url:"assets/guide_software-preparation.md.0da612da.js",revision:"899d63ab1b8cc895b2076268501091c1"},{url:"assets/guide_software-preparation.md.0da612da.lean.js",revision:"899d63ab1b8cc895b2076268501091c1"},{url:"assets/guide_understanding-json.md.c8694bee.js",revision:"c8b42ff1496727b21c0fd26ead1fd78f"},{url:"assets/guide_understanding-json.md.c8694bee.lean.js",revision:"4138a39356830685610cd4f074795db6"},{url:"assets/index.md.c5889fd9.js",revision:"26c4f538936ff9f89b98d5e954244d1c"},{url:"assets/index.md.c5889fd9.lean.js",revision:"26c4f538936ff9f89b98d5e954244d1c"},{url:"assets/items_3d-items.md.eb270c1a.js",revision:"c39162185ca70423a55d2c2864c38240"},{url:"assets/items_3d-items.md.eb270c1a.lean.js",revision:"2f40f69c6536abbf6efbe36fd89d7202"},{url:"assets/items_documentation.md.30e2f1d9.js",revision:"9cce75f8183c3e80b9446c2e548f84ee"},{url:"assets/items_documentation.md.30e2f1d9.lean.js",revision:"0aabf148f3d4567e247997f09d92a014"},{url:"assets/items_guide.md.07ec5600.js",revision:"303aea3498009770cc35d98f7eb3b0e6"},{url:"assets/items_guide.md.07ec5600.lean.js",revision:"e3dbceb685d68730d29f00fe82267701"},{url:"assets/items_index.md.33dfd001.js",revision:"1573404dc66f01b7f0651ddbe0a3eb67"},{url:"assets/items_index.md.33dfd001.lean.js",revision:"1573404dc66f01b7f0651ddbe0a3eb67"},{url:"assets/items_item-categories.md.656553dc.js",revision:"5a8699c212183fcfedc97beb9964b348"},{url:"assets/items_item-categories.md.656553dc.lean.js",revision:"75b02484f5c8b5e388895a474a141fc4"},{url:"assets/items_spawning-items.md.050a4d06.js",revision:"cd5516f43c8a506ef0137fb282b13b4b"},{url:"assets/items_spawning-items.md.050a4d06.lean.js",revision:"6d84248989b95e2e3be3640150319f99"},{url:"assets/meta_addon-performance.md.27c6ce61.js",revision:"017180dd0848c352faf75099dabb6115"},{url:"assets/meta_addon-performance.md.27c6ce61.lean.js",revision:"98bd509056a3e8579e01c6cf748f6289"},{url:"assets/meta_addon-programming.md.7d2faed7.js",revision:"2d296822cd23beea1f01fe19b399f7a8"},{url:"assets/meta_addon-programming.md.7d2faed7.lean.js",revision:"21eede92c64837d95c555f64b0ebc0f4"},{url:"assets/meta_index.md.13751f24.js",revision:"8377e48b3259f2917bb5cdff70e4fd03"},{url:"assets/meta_index.md.13751f24.lean.js",revision:"8377e48b3259f2917bb5cdff70e4fd03"},{url:"assets/meta_jq.md.2d9d9336.js",revision:"37874b7c5669b2f00484f21e13a06dd1"},{url:"assets/meta_jq.md.2d9d9336.lean.js",revision:"0c2ad6a8ac911e23201b7424df3c7ae4"},{url:"assets/meta_style-guide.md.9b782b48.js",revision:"a23af48e371fb8db69e47d65d5a0a20f"},{url:"assets/meta_style-guide.md.9b782b48.lean.js",revision:"506605c96e4c252296822ce574b2b4f8"},{url:"assets/meta_troubleshooting.md.6b5eafdf.js",revision:"66fe3c15a906b0bd579001a193fd9482"},{url:"assets/meta_troubleshooting.md.6b5eafdf.lean.js",revision:"e2e3bb47ddc1245024aa7b903ab2bbcc"},{url:"assets/meta_useful-links.md.8918fcb7.js",revision:"e8451edee499022c550a6b47742857b2"},{url:"assets/meta_useful-links.md.8918fcb7.lean.js",revision:"f4cb095b82deee8d95389e889e7648bd"},{url:"assets/meta_using-schemas.md.ee0be875.js",revision:"96a7c228c7fe00fc50c4f52424bfce9f"},{url:"assets/meta_using-schemas.md.ee0be875.lean.js",revision:"8a5118c86fc55cbf936aa109beef1af0"},{url:"assets/meta_version-control.md.1a2c0c06.js",revision:"5c474e55c751821724c2794034a8aeaf"},{url:"assets/meta_version-control.md.1a2c0c06.lean.js",revision:"5eda4016bc11c1fa043ab11583d5a383"},{url:"assets/new-guide_blockbench.md.15d11d62.js",revision:"dea42b22e5ee2c6e3873feb8842c25c6"},{url:"assets/new-guide_blockbench.md.15d11d62.lean.js",revision:"dea42b22e5ee2c6e3873feb8842c25c6"},{url:"assets/new-guide_custom-entity.md.e61b7ca7.js",revision:"90da54b795fd322c70c76c1e79e89dab"},{url:"assets/new-guide_custom-entity.md.e61b7ca7.lean.js",revision:"44e926a4c5eb4d4a275bcb2757c46164"},{url:"assets/new-guide_custom-item.md.3638d231.js",revision:"226043fc9552a279099dca9b3bbf19b5"},{url:"assets/new-guide_custom-item.md.3638d231.lean.js",revision:"5a8213b4d026a6ddc72f5706bb70a3c6"},{url:"assets/new-guide_index.md.6a32fb1c.js",revision:"49e2ec4b4bf9543a2c099a34c9e0d2be"},{url:"assets/new-guide_index.md.6a32fb1c.lean.js",revision:"49e2ec4b4bf9543a2c099a34c9e0d2be"},{url:"assets/new-guide_introduction.md.56769009.js",revision:"c8fab3d3a78fee8a054d47c8b0181841"},{url:"assets/new-guide_introduction.md.56769009.lean.js",revision:"b2e2b028ef39bc3bf6500d4de153a437"},{url:"assets/new-guide_loot-spawn-recipes.md.f8c655cd.js",revision:"fa745d00d403cdd1c337cf3018276627"},{url:"assets/new-guide_loot-spawn-recipes.md.f8c655cd.lean.js",revision:"95da41fa2d091c4e8806611516b79b54"},{url:"assets/new-guide_project-setup.md.be175c37.js",revision:"fa3042e6f12a6ebfae050abf0fdedd49"},{url:"assets/new-guide_project-setup.md.be175c37.lean.js",revision:"fa3042e6f12a6ebfae050abf0fdedd49"},{url:"assets/scripting_game-tests.md.cff3bc55.js",revision:"05250dd9b6f07786ef9baecd71554f77"},{url:"assets/scripting_game-tests.md.cff3bc55.lean.js",revision:"6e552e46c480822a1029aa215ff8a2a4"},{url:"assets/scripting_guide.md.73e684f9.js",revision:"9fa347c8a62cd33fedc713abadaf6f20"},{url:"assets/scripting_guide.md.73e684f9.lean.js",revision:"55f79577c3ad3021e41b97f6b1fb6c92"},{url:"assets/scripting_index.md.c19c0a84.js",revision:"ed162126ded60ac42975f7f5a677caba"},{url:"assets/scripting_index.md.c19c0a84.lean.js",revision:"ed162126ded60ac42975f7f5a677caba"},{url:"assets/scripting_saving-loading.md.acb60f3a.js",revision:"44fccd9af514c8807f7e354d75d6ae13"},{url:"assets/scripting_saving-loading.md.acb60f3a.lean.js",revision:"2a20a9f571ecf5886db82c4c65f650a5"},{url:"assets/scripting_typescript.md.a456cfe6.js",revision:"d0c1b3b943515018870b98a7cdd8bc33"},{url:"assets/scripting_typescript.md.a456cfe6.lean.js",revision:"d0c1b3b943515018870b98a7cdd8bc33"},{url:"assets/style.d5bfc7c7.css",revision:"8a7724a52ecbca0aa1fbe152217cbad1"},{url:"assets/tutorials_craftable-spawneggs.md.9c891c29.js",revision:"9974af933593c4989adc920061cbd4e4"},{url:"assets/tutorials_craftable-spawneggs.md.9c891c29.lean.js",revision:"1cb72b1d270e726e692d06d73260ca7c"},{url:"assets/tutorials_custom-armor.md.da256fb7.js",revision:"4d22fa5baef004e7536c1b9dbb120bf2"},{url:"assets/tutorials_custom-armor.md.da256fb7.lean.js",revision:"4d22fa5baef004e7536c1b9dbb120bf2"},{url:"assets/tutorials_disabling-particles.md.5bd941af.js",revision:"884a7d0a7371601c3c15aec13ac025f1"},{url:"assets/tutorials_disabling-particles.md.5bd941af.lean.js",revision:"40c3922908c9b974ac0b074bd7b1b482"},{url:"assets/tutorials_disabling-team-damage.md.80a1442d.js",revision:"165b1a29a78900d788db9b321f0baf08"},{url:"assets/tutorials_disabling-team-damage.md.80a1442d.lean.js",revision:"cd92af399a390d8a0b0d7d57bc35880c"},{url:"assets/tutorials_egg-drops.md.e80b287c.js",revision:"7ee1cc90e5767f92aeb68016f9730c0f"},{url:"assets/tutorials_egg-drops.md.e80b287c.lean.js",revision:"112d87e495b986c7da389def0b8c03c7"},{url:"assets/tutorials_index.md.7c3bbd7b.js",revision:"037b05797c38894ebdf0698cdefdaf47"},{url:"assets/tutorials_index.md.7c3bbd7b.lean.js",revision:"037b05797c38894ebdf0698cdefdaf47"},{url:"assets/tutorials_player-geometry.md.f3082011.js",revision:"52b48e8936b1de588a1611f6ca55ee18"},{url:"assets/tutorials_player-geometry.md.f3082011.lean.js",revision:"d3caa5eb43a70da5f1140f00b786fc10"},{url:"assets/tutorials_remove-shadows.md.30355a83.js",revision:"e40f8eeedf71ac7e1b023a7aab4dd5a0"},{url:"assets/tutorials_remove-shadows.md.30355a83.lean.js",revision:"e6a8ccbd6e9232573ec3376a049c6e12"},{url:"assets/tutorials_retexturing-spawn-eggs.md.9ab6e01c.js",revision:"d04dee1284744e2573377d72859770e9"},{url:"assets/tutorials_retexturing-spawn-eggs.md.9ab6e01c.lean.js",revision:"e7cc89179cb4b8a6de1eb0927511fab5"},{url:"assets/tutorials_text-localization.md.4b14371b.js",revision:"7492f1190b28eb6fd7f92628cf772ef3"},{url:"assets/tutorials_text-localization.md.4b14371b.lean.js",revision:"b460305f4fc968fb2fc89c91ce748123"},{url:"assets/world-generation_beginners-guide.md.bb07d598.js",revision:"7c17c92127a4178c1af8a0d7b1137479"},{url:"assets/world-generation_beginners-guide.md.bb07d598.lean.js",revision:"7c17c92127a4178c1af8a0d7b1137479"},{url:"assets/world-generation_biome-tags.md.14ce2c06.js",revision:"d4f7f7edca490e4e0dae96b2b0572a4a"},{url:"assets/world-generation_biome-tags.md.14ce2c06.lean.js",revision:"8eea7b2fb95bcf39f5c2c0457fac0dc1"},{url:"assets/world-generation_biomes.md.f42ce173.js",revision:"74a29c024104790c636e68cc11fc8b5d"},{url:"assets/world-generation_biomes.md.f42ce173.lean.js",revision:"27b73be0ecd016b2f39d5faac4dbf4ff"},{url:"assets/world-generation_feature-types.md.501b4224.js",revision:"dee151c18fcea7477f413685d4abb41d"},{url:"assets/world-generation_feature-types.md.501b4224.lean.js",revision:"5853587c63dc380232757ba9c6b07c2c"},{url:"assets/world-generation_index.md.d8bd19c7.js",revision:"09ed7cc9fbc05cf2921cd2f4565a1dec"},{url:"assets/world-generation_index.md.d8bd19c7.lean.js",revision:"09ed7cc9fbc05cf2921cd2f4565a1dec"},{url:"registerSW.js",revision:"3be22912fd14291c200edaae7ff5f610"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
