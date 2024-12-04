import bear from "@/assets/images/besties/bear.webp";
import bigbadwolf from "@/assets/images/besties/bigbadwolf.webp";
import berserker from "@/assets/images/besties/berserker.webp";
import ulfhedinn from "@/assets/images/besties/ulfhedinn.webp";
import cockatrice from "@/assets/images/besties/cockatrice.webp";
import forktail from "@/assets/images/besties/forktail.webp";
import djinn from "@/assets/images/besties/djinn.webp";
import golem from "@/assets/images/besties/golem.webp";
import griffin from "@/assets/images/besties/griffin.webp";
import harpy from "@/assets/images/besties/harpy.webp";

export const besties = [
  {
    title: "Beasts",
    besties: [
      {
        title: "Bear",
        description: `Bears are generally found far from human habitation, either in the high mountains or in the deep woods. The opposite of dogs and wolves, bears are solitary creatures, which is probably for the best considering how strong a killing machine they are. It is simple enough a thing to avoid fighting a bear, but that is not always the case. A bear may be clumsy but they run at high speeds despite their bulky sizes, so running away may not always be an option, especially if you have already angered the bear.[1]
Its bestiary entry can be obtained by reading Fauna of the Northern Realms, Volume 2, which however (while existing in the base game files) cannot be obtained before the Blood and Wine expansion.`,
        defeat: ["Swords: 3", "Shields: 2"],
        image: bear,
      },
      {
        title: "Big Bad Wolf",
        description: `The Big Bad Wolf is a large lupine humanoid who inhabits the illusory Land of a Thousand Fables, created by Artorius Vigo. He is based on a homonym figure from Nordling folk tales and served as a childhood playmate for Anna Henrietta and Sylvia Anna, two daughters of Toussaintois duke.`,
        defeat: ["Swords: 3", "Shields: 2"],
        image: bigbadwolf,
      },
    ],
  },
  {
    title: "Cursed Ones",
    besties: [
      {
        title: "Werebear",
        description: `Werebears,[1] on Skellige known as berserkers,[2] are therianthropes who transform into bears or half-bears. As other such creatures, they are hardly hurt by steel but are still very vulnerable to silver.
Like other kinds of therianthropy, the "arctanthropy" can be acquired either as a result of a curse or inherited from werebear parents. However, it is likely that a bite from a werebear does not result in the victim becoming a werebear as well.[1][3][4] That said, on the Skellige Isles, a group of Svalblod worshipers called Vildkaarls invented another, "controllable" way of becoming a berserker. After a complicated ritual involving psilocybe mushrooms and what seemed to be allowing wild bears to eat the cultists alive, the fierce warriors used to rise and spill blood in the name of their god.`,
        defeat: ["Silver sword", "Cursed oil"],
        image: berserker,
      },
      {
        title: "Ulfhedinn",
        description: `Ulfhedinn are a type of werewolf only found around Skellige. They have stronger combat skills on their own, but unlike common werewolves can't summon wolves to their aid[1], and only appear during the night (after 10pm).
A bestiary entry can be added by reading In Beast's Clothing.`,
        defeat: ["Exploding bolts for a crossbow"],
        image: ulfhedinn,
      },
    ],
  },
  {
    title: "Draconids",
    besties: [
      {
        title: "Cockatrice",
        description: `Cockatrice, also known as a skoffin and kurolishek, is an ornithosaur. It's also the only creature to belong to the order of ornithoreptile according to scholars, but why exactly they decided on this is not revealed.[1] Its central tail feathers are also valuable as they're more durable and sharpen better than regular goose feathers for quills.[citation needed] Cockatrices are often found in remote, rocky areas such as canyons or cliffs. They are aggressive and territorial, attacking anything that ventures into their domain.[2]
Superstitions surrounding the creature suggest that they are born of eggs laid by roosters consorting with other roosters. The egg must be incubated for forty-four days by a toad, which is devoured by the little beast as soon as it hatches. Another superstition states their glance turns the living to stone; neither are true.[3]`,
        defeat: [
          "A cockatrice tries to surprise its opponent, strike suddenly and poison him with its venom",
        ],
        image: cockatrice,
      },
      {
        title: "Forktail",
        description: `Forktail (Polish: widłogon) is a creature related to dragons, but smaller and not intelligent. Just as the name suggests, it can be recognized by its forked tail. They are often found in mountainous regions, nesting on high peaks and rocky outcrops, and naturally prefer isolated locations, far from human settlements.
A bestiary entry can technically be obtained by reading Death From Above, but the book doesn't appear during gameplay.`,
        defeat: ["Silver sword"],
        image: forktail,
      },
    ],
  },
  {
    title: "Elementa",
    besties: [
      {
        title: "Djinn",
        description: `Djinn, D'jinni or Djinniah[1] is the name given to an elemental genie of Air.
Much the same as in fairy tales, Djinns are powerful creatures that are capable of great feats. Once captured, they are then bound to the captor and have to fulfill three wishes. Following their completion, they are free once more.`,
        defeat: ["Silver sword"],
        image: djinn,
      },
      {
        title: "Golem",
        description: `Frustrating jobs happen in every profession. Golem contracts are just such a job for witchers, as they involve slashing through solid rock animated by magic. Luckily, what is brought to life by a lightning bolt can very well be destroyed by one. This is something we all truly wish the golem, from the very bottom of our hearts.`,
        defeat: [
          "A golem uses its superhuman strength to knock down, stun and crush opponents",
        ],
        image: golem,
      },
    ],
  },
  {
    title: "Hybrids",
    besties: [
      {
        title: "Griffin",
        description: `A griffin, also known as griffon or gryphon, is a creature with the body, legs, and tail of a lion and the head, wings, and talons of an eagle. They are known to toy with their prey, eating it alive, piece by piece.[1]
Inhabiting mainly caves in most of the mountains on the continent, griffins reproduce by laying eggs.[2] They have strong wings, and so have the capability to create a unblockable and powerful strike with their talons.[3]`,
        defeat: ["Silver sword"],
        image: griffin,
      },
      {
        title: "Harpy",
        description: `Most monsters don't actually keep any treasure in their lairs. Harpies, though - they like shiny things. 
        – Letho, Viper School witcher
It is hard to say what is most repulsive about harpies and their cousins, the shishigas: their hideous appearance, the overwhelming stench of rot and bird excrement that clings to them or their bloodcurdling screech. Suffice it to say that even rats, who dwell happily among the rankest fecal matter and rotten waste, give their nests wide berth.`,
        defeat: ["Swarm their victims"],
        image: harpy,
      },
    ],
  },
];
