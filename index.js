#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const boxen = require('boxen');
const prompt = require('prompt');
const inquirer = require('inquirer');
const chalkRainbow = require('chalk-rainbow')

'use strict';

const newLine = '\n';
let cptHistoire = 3;
let cptGeographie = 3;
let cptLitterature = 3;
let cptSport = 3;
let cptDivertissement = 3;
let cptSciences = 0;


function main() {
    console.log('Bienvenue à Trivioul Poursuit !!! Le but est de répondre correctement à 3 questions pour récupérer ce fameux CAMOUBERT :D Êtes-vous prêt(e)?');
    goQuestion();
}

function victoire() {
    console.log(chalkRainbow.bold('Bravo, vous avez récupérer tous les camouberts !'));
}

var themePrompt = {
    type: 'list',
    name: 'theme',
    message: 'Choissisez un thème',
    choices: [{
        'name': 'Histoire',
        'value': 'Histoire'
    }, {
        'name': 'Géographie',
        'value': 'Géographie'
    }, {
        'name': 'Art/Littérature',
        'value': 'Art/Littérature'
    }, {
        'name': 'Sport/Loisirs',
        'value': 'Sport/Loisirs'
    }, {
        'name': 'Divertissement',
        'value': 'Divertissement'
    }, {
        'name': 'Sciences/Nature',
        'value': 'Sciences/Nature'
    }]
};

function goQuestion() {
    inquirer.prompt(themePrompt).then(answers => {

        switch (answers.theme) {
            case 'Histoire':
                var histoirePrompt1 = {
                    type: 'list',
                    name: 'histoire1',
                    message: 'À qui la citation « Ni Dieu ni maître » est-elle attribuée ?',
                    choices: ['Louis-Auguste Blanqui', 'Lénine', 'Wiston Churchill', 'Bénabar']
                };

                function answerHist1() {
                    inquirer.prompt(histoirePrompt1).then(answers => {
                        if (answers.histoire1 === 'Louis-Auguste Blanqui') {
                            cptHistoire++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerHist2()
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerHist2();
                        }
                    });
                }

                var histoirePrompt2 = {
                    type: 'list',
                    name: 'histoire2',
                    message: ' Comment s\'appelait la première épouse de Napoléon Bonaparte ? ',
                    choices: ['Joséphine Ange-Gardien', 'Joséphine de Beauharnais', 'Joséphine de La Baume', 'Joséphine de Meaux']
                };

                function answerHist2() {
                    inquirer.prompt(histoirePrompt2).then(answers => {
                        if (answers.histoire2 === 'Joséphine de Beauharnais') {
                            cptHistoire++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerHist3();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerHist3();
                        }
                    })
                }

                var histoirePrompt3 = {
                    type: 'list',
                    name: 'histoire3',
                    message: ' Dans quel pays se trouve Waterloo, où Napoléon a perdu la fameuse bataille de 1815 ? ',
                    choices: ['France', 'Suisse', 'Belgique', 'Luxembourg']
                };

                function answerHist3() {
                    inquirer.prompt(histoirePrompt3).then(answers => {
                        if (answers.histoire3 === 'Belgique') {
                            cptHistoire++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerHist4();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerHist4();
                        }
                    })
                }

                var histoirePrompt4 = {
                    type: 'list',
                    name: 'histoire4',
                    message: ' De quelle couleur est le ruban représentant la lutte contre le cancer du sein ? ',
                    choices: ['Blanc', 'Rouge', 'Noir', 'Rose']
                };

                function answerHist4() {
                    inquirer.prompt(histoirePrompt4).then(answers => {
                        if (answers.histoire4 === 'Rose') {
                            cptHistoire++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerHist5();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerHist5();
                        }
                    })
                }

                var histoirePrompt5 = {
                    type: 'list',
                    name: 'histoire5',
                    message: ' Laquelle de ces lettres ne peut pas figurer sur une plaque d\'immatriculation française ?  ',
                    choices: ['U', 'I', 'T', 'W']
                };

                function answerHist5() {
                    inquirer.prompt(histoirePrompt5).then(answers => {
                        if (answers.histoire5 === 'U') {
                            cptHistoire++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                        } else {
                            console.log('Ce n\'est pas la bonne réponse');
                        }
                        if (cptHistoire >= 3) {
                            newLine;
                            console.log(chalk.hex('#F3F781').bold('Bravo ! Vous avez récupéré le camoubert JAUNE !'))
                            newLine;
                            if (cptHistoire >= 3 && cptGeographie >= 3 && cptLitterature >= 3 && cptSport >= 3 && cptDivertissement >= 3 && cptSciences >= 3) {
                                victoire();
                            } else {
                                goQuestion()
                            }

                        } else {
                            newLine;
                            cptHistoire = 0;
                            console.log('Désolé, vous n\'avez pas récupéré le ' + chalk.hex('#F3F781').bold('camoubert jaune') + '. Vous pourrez réessayer plus tard.')
                            newLine;
                            goQuestion()
                        }
                    })
                }
                answerHist1();
                break;

            case 'Géographie':
                var geographiePrompt1 = {
                    type: 'list',
                    name: 'geographie1',
                    message: 'Dans quel pays Jóhanna Sigurðardóttir a-t-elle succédé à Geir Haarde au poste de Premier ministre ?',
                    choices: ['Islande', 'Finlande', 'Danemark', 'Norvège']
                };

                function answerGeo1() {
                    inquirer.prompt(geographiePrompt1).then(answers => {
                        if (answers.geographie1 === 'Islande') {
                            cptGeographie++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerGeo2()
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerGeo2();
                        }
                    });
                }

                var geographiePrompt2 = {
                    type: 'list',
                    name: 'geographie2',
                    message: ' Dans quel pays peut-on commander une soupe traditionnelle aux nids d\'hirondelle ?  ',
                    choices: ['Japon', 'Chine', 'Corée du Nord', 'Corée du Sud']
                };

                function answerGeo2() {
                    inquirer.prompt(geographiePrompt2).then(answers => {
                        if (answers.geographie2 === 'Chine') {
                            cptGeographie++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerGeo3();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerGeo3();
                        }
                    })
                }

                var geographiePrompt3 = {
                    type: 'list',
                    name: 'geographie3',
                    message: ' Dans quelle ville européenne se trouve la « Bouche de vérité » ? ',
                    choices: ['Rome', 'Venise', 'Milan', 'Turin']
                };

                function answerGeo3() {
                    inquirer.prompt(geographiePrompt3).then(answers => {
                        if (answers.geographie3 === 'Rome') {
                            cptGeographie++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerGeo4();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerGeo4();
                        }
                    })
                }

                var geographiePrompt4 = {
                    type: 'list',
                    name: 'geographie4',
                    message: ' De quelle famille de graines robusta et arabica sont-elles les deux principales variétés ? ',
                    choices: ['Thé', 'Jus', 'Soda', 'Café']
                };

                function answerGeo4() {
                    inquirer.prompt(geographiePrompt4).then(answers => {
                        if (answers.geographie4 === 'Café') {
                            cptGeographie++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerGeo5();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerGeo5();
                        }
                    })
                }

                var geographiePrompt5 = {
                    type: 'list',
                    name: 'geographie5',
                    message: ' Laquelle de ces langues est officiellement parlée en Papouasie-Nouvelle-Guinée ? ',
                    choices: ['Anglais', 'Français', 'Portugais', 'Papouasien']
                };

                function answerGeo5() {
                    inquirer.prompt(geographiePrompt5).then(answers => {
                        if (answers.geographie5 === 'Anglais') {
                            cptGeographie++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                        }
                        if (cptGeographie >= 3) {
                            newLine;
                            console.log(chalk.hex('#5882FA').bold('Bravo ! Vous avez récupéré le camoubert BLEU !'))
                            newLine;
                            if (cptHistoire >= 3 && cptGeographie >= 3 && cptLitterature >= 3 && cptSport >= 3 && cptDivertissement >= 3 && cptSciences >= 3) {
                                victoire();
                            } else {
                                goQuestion()
                            }
                        } else {
                            newLine;
                            console.log('Désolé, vous n\'avez pas récupéré le ' + chalk.hex('#5882FA').bold('camoubert bleu') + '. Vous pourrez réessayer plus tard.')
                            cptGeographie = 0;
                            newLine;
                            goQuestion()
                        }
                    })
                }
                answerGeo1();
                break;

            case 'Art/Littérature':
                var litteraturePrompt1 = {
                    type: 'list',
                    name: 'litterature1',
                    message: 'Combien de tableaux Van Gogh a-t-il vendus de son vivant ? ',
                    choices: ['0', '1', '2', '3']
                };

                function answerLit1() {
                    inquirer.prompt(litteraturePrompt1).then(answers => {
                        if (answers.litterature1 === '1') {
                            cptLitterature++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerLit2()
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerLit2();
                        }
                    });
                }

                var litteraturePrompt2 = {
                    type: 'list',
                    name: 'litterature2',
                    message: 'Dans l\'œuvre de J.K. Rowling, quel artefact magique permet à Harry Potter de se déplacer dans Poudlard sans être vu ? ',
                    choices: ['Des rollers magiques', 'La cape d\'invisibilité', 'Sa chouette', 'Des Jelly Belly']
                };

                function answerLit2() {
                    inquirer.prompt(litteraturePrompt2).then(answers => {
                        if (answers.litterature2 === 'La cape d\'invisibilité') {
                            cptLitterature++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerLit3();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerLit3();
                        }
                    })
                }

                var litteraturePrompt3 = {
                    type: 'list',
                    name: 'litterature3',
                    message: 'Dans le conte de Hans Christian Andersen, à qui appartient le cœur que glace la « Reine des neiges » ? ',
                    choices: ['Un garçon', 'Une fille', 'Un bonhomme de neige', 'Sa soeur Anna']
                };

                function answerLit3() {
                    inquirer.prompt(litteraturePrompt3).then(answers => {
                        if (answers.litterature3 === 'Un garçon') {
                            cptLitterature++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerLit4();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerLit4();
                        }
                    })
                }

                var litteraturePrompt4 = {
                    type: 'list',
                    name: 'litterature4',
                    message: 'Dans quelle aventure Tintin fait-il du yoga ?',
                    choices: ['Tintin et l\'oreille cassée', 'Tintin au Tibet', 'Tintin et les bijoux de la Castafiore', 'Tintin et les Picaros']
                };

                function answerLit4() {
                    inquirer.prompt(litteraturePrompt4).then(answers => {
                        if (answers.litterature4 === 'Tintin et les Picaros') {
                            cptLitterature++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerLit5();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerLit5();
                        }
                    })
                }

                var litteraturePrompt5 = {
                    type: 'list',
                    name: 'litterature5',
                    message: 'Qu\'ont exposé les artistes Sophie Calle et Franck Gehry sur le pont du Garigliano à Paris ?',
                    choices: ['Une statue d\'Elvis', 'Un lavabo', 'Une cabine téléphonique', 'Des trotinettes rouillées']
                };

                function answerLit5() {
                    inquirer.prompt(litteraturePrompt5).then(answers => {
                        if (answers.litterature5 === 'Une cabine téléphonique') {
                            cptLitterature++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                        }
                        if (cptLitterature >= 3) {
                            newLine;
                            console.log(chalk.hex('#B45F04').bold('Bravo ! Vous avez récupéré le camoubert BRUN !'))
                            newLine;
                            if (cptHistoire >= 3 && cptGeographie >= 3 && cptLitterature >= 3 && cptSport >= 3 && cptDivertissement >= 3 && cptSciences >= 3) {
                                victoire();
                            } else {
                                goQuestion()
                            }
                        } else {
                            newLine;
                            cptLitterature = 0;
                            console.log('Désolé, vous n\'avez pas récupéré le ' + chalk.hex('#B45F04').bold('camoubert brun') + '. Vous pourrez réessayer plus tard.')
                            newLine;
                            goQuestion()
                        }
                    })
                }
                answerLit1();
                break;

            case 'Sport/Loisirs':
                var sportPrompt1 = {
                    type: 'list',
                    name: 'sport1',
                    message: 'Combien de temps dure une période au football ?',
                    choices: ['15 min', '45 min', '90 min', '105 min']
                };

                function answerSport1() {
                    inquirer.prompt(sportPrompt1).then(answers => {
                        if (answers.sport1 === '45 min') {
                            cptSport++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerSport2()
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerSport2();
                        }
                    });
                }

                var sportPrompt2 = {
                    type: 'list',
                    name: 'sport2',
                    message: 'Comment s\'appelle l\'équipe de basket de Charleroi ?',
                    choices: ['Spirou Basket', 'Carolo Basket', 'Baraki Basket', 'Biesse Basket']
                };

                function answerSport2() {
                    inquirer.prompt(sportPrompt2).then(answers => {
                        if (answers.sport2 === 'Spirou Basket') {
                            cptSport++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerSport3();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerSport3();
                        }
                    })
                }

                var sportPrompt3 = {
                    type: 'list',
                    name: 'sport3',
                    message: 'Dans quel sport s\'est illustré Babe Ruth ? ',
                    choices: ['Le football', 'Le basket', 'La natation', 'Le base-ball']
                };

                function answerSport3() {
                    inquirer.prompt(sportPrompt3).then(answers => {
                        if (answers.sport3 === 'Le base-ball') {
                            cptSport++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerSport4();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerSport4();
                        }
                    })
                }

                var sportPrompt4 = {
                    type: 'list',
                    name: 'sport4',
                    message: 'Dans quelle épreuve de saut Jesse Owens a-t-il été médaillé d\'or aux Jeux olympiques de Berlin en 1936 ?',
                    choices: ['Le saut en longueur', 'Le saut en hauteur', 'Le saut à la perche', 'Le saut à ski']
                };

                function answerSport4() {
                    inquirer.prompt(sportPrompt4).then(answers => {
                        if (answers.sport4 === 'Le saut en longueur') {
                            cptSport++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerSport5();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerSport5();
                        }
                    })
                }

                var sportPrompt5 = {
                    type: 'list',
                    name: 'sport5',
                    message: 'Quel chanteur et acteur français, auteur de Casser la voix et Alors regarde, est aussi un joueur de poker ?',
                    choices: ['Patrick Sebastien', 'Garou', 'JCVD', 'Patrick Bruel']
                };

                function answerSport5() {
                    inquirer.prompt(sportPrompt5).then(answers => {
                        if (answers.sport5 === 'Patrick Bruel') {
                            cptSport++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                        }
                        if (cptSport >= 3) {
                            newLine;
                            console.log(chalk.hex('#FE9A2E').bold('Bravo ! Vous avez récupéré le camoubert ORANGE !'))
                            newLine;
                            if (cptHistoire >= 3 && cptGeographie >= 3 && cptLitterature >= 3 && cptSport >= 3 && cptDivertissement >= 3 && cptSciences >= 3) {
                                victoire();
                            } else {
                                goQuestion()
                            }
                        } else {
                            newLine;
                            cptSport = 0;
                            console.log('Désolé, vous n\'avez pas récupéré le ' + chalk.hex('#FE9A2E').bold('camoubert orange') + '. Vous pourrez réessayer plus tard.')
                            newLine;
                            goQuestion()
                        }
                    })
                }
                answerSport1();
                break;

            case 'Divertissement':
                var diverPrompt1 = {
                    type: 'list',
                    name: 'diver1',
                    message: 'Dans Super Size Me, dans quel restaurant le réalisateur Morgan Spurlock a-t-il mangé pendant 30 jours ?',
                    choices: ['McDonald\'s', 'Quick', 'Burger King', 'KFC']
                };

                function answerDiver1() {
                    inquirer.prompt(diverPrompt1).then(answers => {
                        if (answers.diver1 === 'McDonald\'s') {
                            cptDivertissement++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerDiver2()
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerDiver2();
                        }
                    });
                }

                var diverPrompt2 = {
                    type: 'list',
                    name: 'diver2',
                    message: 'Dans le film Les Visiteurs, qui interprète Frénégonde de Pouille et Béatrice de Montmirail ?',
                    choices: ['Muriel Robin', 'Isabelle Nanty', 'Marie-Anne Chazel', 'Valérie Lemercier']
                };

                function answerDiver2() {
                    inquirer.prompt(diverPrompt2).then(answers => {
                        if (answers.diver2 === 'Valérie Lemercier') {
                            cptDivertissement++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerDiver3();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerDiver3();
                        }
                    })
                }

                var diverPrompt3 = {
                    type: 'list',
                    name: 'diver3',
                    message: 'Dans quel film de Guillaume Canet suit-on les vacances d\'un groupe d\'amis partis malgré l\'accident de l\'un d\'entre eux ?',
                    choices: ['Ne le dis à personne', 'Jeux d\'enfants', 'Nous finirons ensemble', 'Les Petits Mouchoirs']
                };

                function answerDiver3() {
                    inquirer.prompt(diverPrompt3).then(answers => {
                        if (answers.diver3 === 'Les Petits Mouchoirs') {
                            cptDivertissement++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerDiver4();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerDiver4();
                        }
                    })
                }

                var diverPrompt4 = {
                    type: 'list',
                    name: 'diver4',
                    message: 'Dans sa chanson « Le Dîner », que voudrait commander Bénabar, plutôt que de sortir dîner chez ses amis ?',
                    choices: ['Des pizzas', 'Des kebabs', 'De la moussaka', 'Un routier fricadelle sauce dallas']
                };

                function answerDiver4() {
                    inquirer.prompt(diverPrompt4).then(answers => {
                        if (answers.diver4 === 'Des pizzas') {
                            cptDivertissement++;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            answerDiver5();
                        } else {
                            console.log('Ce n\'est pas la bonne réponse');
                            answerDiver5();
                        }
                    })
                }

                var diverPrompt5 = {
                    type: 'list',
                    name: 'diver5',
                    message: 'Qu\'est-ce qui est à la fois une variété de pommes et un membre du gang de filles de Rizzo dans le film Grease ? ',
                    choices: ['Gala', 'Golden', 'Pink Lady', 'Fuji']
                };

                function answerDiver5() {
                    inquirer.prompt(diverPrompt5).then(answers => {
                        if (answers.diver5 === 'Pink Lady') {
                            cptDivertissement++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                        }
                        if (cptDivertissement >= 3) {
                            newLine;
                            console.log(chalk.hex('#FF0080').bold('Bravo ! Vous avez récupéré le camoubert ROSE !'))
                            newLine;
                            if (cptHistoire >= 3 && cptGeographie >= 3 && cptLitterature >= 3 && cptSport >= 3 && cptDivertissement >= 3 && cptSciences >= 3) {
                                victoire();
                            } else {
                                goQuestion()
                            }
                        } else {
                            newLine;
                            cptDivertissement = 0;
                            console.log('Désolé, vous n\'avez pas récupéré le ' + chalk.hex('#FF0080').bold('camoubert rose') + '. Vous pourrez réessayer plus tard.')
                            newLine;
                            goQuestion()
                        }
                    })
                }
                answerDiver1();
                break;

            case 'Sciences/Nature':
                var sciencePrompt1 = {
                    type: 'list',
                    name: 'science1',
                    message: 'Combien de cavités comprend le cœur ?',
                    choices: ['2', '4', '6', '8']
                };

                function answerScience1() {
                    inquirer.prompt(sciencePrompt1).then(answers => {
                        if (answers.science1 === '4') {
                            cptSciences++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerScience2()
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerScience2();
                        }
                    });
                }

                var sciencePrompt2 = {
                    type: 'list',
                    name: 'science2',
                    message: 'Dans quelle partie du corps se trouve la patella ?',
                    choices: ['Le coude', 'Le genou', 'La gorge', 'Le mollet']
                };

                function answerScience2() {
                    inquirer.prompt(sciencePrompt2).then(answers => {
                        if (answers.science2 === 'Le genou') {
                            cptDivertissement++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerScience3();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerScience3();
                        }
                    })
                }

                var sciencePrompt3 = {
                    type: 'list',
                    name: 'science3',
                    message: 'Quelle est l\'unique planète de notre système solaire à ne pas avoir été nommée d\'après un dieu romain ou grec ? ',
                    choices: ['Saturne', 'Pluton', 'Jupiter', 'La Terre']
                };

                function answerScience3() {
                    inquirer.prompt(sciencePrompt3).then(answers => {
                        if (answers.science3 === 'La Terre') {
                            cptSciences++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerScience4();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerScience4();
                        }
                    })
                }

                var sciencePrompt4 = {
                    type: 'list',
                    name: 'science4',
                    message: 'Quelle saveur les chats ne peuvent-ils pas détecter ?',
                    choices: ['Le salé', 'L\'épicé', 'Le piquant', 'Le sucré']
                };

                function answerScience4() {
                    inquirer.prompt(sciencePrompt4).then(answers => {
                        if (answers.science4 === 'Le sucré') {
                            cptSciences++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                            answerScience5();
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                            answerScience5();
                        }
                    })
                }

                var sciencePrompt5 = {
                    type: 'list',
                    name: 'science5',
                    message: 'À quel scientifique appartenaient les calepins qui continuent à être radioactifs 100 ans après avoir été écrits ?',
                    choices: ['Marie Curie', 'Rosalind Franklin', 'Mileva Einstein', 'Esther Lederberg']
                };

                function answerScience5() {
                    inquirer.prompt(sciencePrompt5).then(answers => {
                        if (answers.science5 === 'Marie Curie') {
                            cptSciences++;
                            newLine;
                            console.log('Bravo, vous avez trouvé la bonne réponse !');
                            newLine;
                        } else {
                            newLine;
                            console.log('Ce n\'est pas la bonne réponse');
                            newLine;
                        }
                        if (cptSciences >= 3) {
                            newLine;
                            console.log(chalk.hex('#04B404').bold('Bravo ! Vous avez récupéré le camoubert VERT !'))
                            newLine;
                            if (cptHistoire >= 3 && cptGeographie >= 3 && cptLitterature >= 3 && cptSport >= 3 && cptDivertissement >= 3 && cptSciences >= 3) {
                                victoire();
                            } else {
                                goQuestion()
                            }
                        } else {
                            newLine;
                            cptSciences = 0;
                            console.log('Désolé, vous n\'avez pas récupéré le ' + chalk.hex('#04B404').bold('camoubert vert') + '. Vous pourrez réessayer plus tard.')
                            newLine;
                            goQuestion()
                        }
                    })
                }
                answerScience1();
                break;
        }
    })
};

main();