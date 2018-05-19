export interface Monarch {
    name: string;
    reign: string;
    issue: string[];
    house: string;
}

export class EnglishMonarchs {
    public monarchs = [];

    constructor() {
        this.monarchs.push(this.makeKing(
            'Cnut the Great',
            '1018–1035',
            [
                'Svein Knutsson',
                'Harold Harefoot',
                'Harthacnut',
                'Gunhilda of Denmark'
            ],
            'Denmark'
        ));
        this.monarchs.push(this.makeKing(
            'Harold Harefoot',
            '12 November 1035 – 17 March 1040',
            ['Ælfwine'],
            'Denmark'
        ));
        this.monarchs.push(this.makeKing(
            'Harthacnut',
            '17 March 1040 – 8 June 1042',
            [],
            'Denmark'
        ));
        this.monarchs.push(this.makeKing(
            'Edward the Confessor',
            '8 June 1042 – 5 January 1066',
            [],
            'Wessex'
        ));
        this.monarchs.push(this.makeKing(
            'Harold Godwinson',
            '5 January – 14 October 1066',
            ['Godwin', 'Edmund', 'Magnus', 'Gunhild', 'Gytha', 'Harold, Ulf'],
            'Godwin'
        ));
        this.monarchs.push(this.makeKing(
            'Edgar Ætheling',
            '15 October – 10 December 1066 Never crowned',
            [],
            'Wessex'
        ));
        this.monarchs.push(this.makeKing(
            'William the Conqueror',
            '25 December 1066 – 9 September 1087',
            [
                'Richard',
                'William II of England',
                'Matilda', 'Cecilia',
                'Henry I of England',
                'Adeliza', 'Constance',
                'Adela, Countess of Blois',
                'Agatha (existence doubtful)'
            ],
            'Normandy'
        ));
        this.monarchs.push(this.makeKing(
            'William II aka William Rufus',
            '26 September 1087 – 2 August 1100',
            [],
            'Normandy'
        ));
        this.monarchs.push(this.makeKing(
            'Henry I',
            '5 August 1100 – 1 December 1135',
            [
                'Matilda, Holy Roman Empress',
                'William Adelin',
                'Robert, 1st Earl of Gloucester',
                'Alice FitzRoy',
                'Gilbert FitzRoy',
                'Matilda FitzRoy, Countess of Perche',
                'Fulk FitzRoy',
                'Sybilla, Queen of Scots',
                'Reginald de Dunstanville, 1st Earl of Cornwall',
                'Robert FitzEdith, Lord Okehampton',
                'Henry FitzRoy (d. 1158)',
                'Matilda FitzRoy, Abbess of Montvilliers'
            ],
            'Normandy'
        ));
        this.monarchs.push(this.makeKing(
            'Empress Matilda (disputed)',
            '7 April 1141 – 1148',
            [
                'Henry II of England',
                'Geoffrey, Count of Nantes',
                'William FitzEmpress'
            ],
            'Normandy'
        ));
        this.monarchs.push(this.makeKing(
            'Stephen',
            '22 December 1135 – 25 October 1154',
            [
                'Eustace IV, Count of Boulogne',
                'Marie I, Countess of Boulogne',
                'William I, Count of Boulogne',
                'Gervase, Abbot of Westminster'
            ],
            'Blois'
        ));

        this.monarchs.push(this.makeKing(
            'Henry II',
            '19 December 1154 – 6 July 1189',
            [
                'William IX, Count of Poitiers',
                'Henry the Young King',
                'Matilda, Duchess of Saxony',
                'Richard I, King of England',
                'Geoffrey II, Duke of Brittan',
                'Eleanor, Queen of Castile',
                'Joan, Queen of Sicily',
                'John, King of England',
                'Geoffrey, Archbishop of York (illegitimate)',
                'William, Earl of Salisbury (illegitimate)'
            ],
            'Plantagenet/Angevin'
        ));
        this.monarchs.push(this.makeKing(
            'Richard I',
            '3 September 1189 – 6 April 1199',
            ['Philip of Cognac (illegitimate)'],
            'Plantagenet/Angevin'
        ));
    }

    private makeKing(name: string, reign: string, issue: string[], house: string): Monarch {
        return {
            name: name,
            reign: reign,
            issue: issue,
            house: house
        };
    }
}
