// Controller
const controller = {
    pushGreen: function() {
        model.buttonPress("green");
    },
    smallGreen: function() {
        this.pushGreen();
        view.displaySmallPush("green");
    },
    pushRed: function() {
        model.buttonPress("red");
    },
    smallRed: function() {
        this.pushRed();
        view.displaySmallPush("red");
    },
    pushYellow: function() {
        model.buttonPress("yellow");
        view.pressYellow();
    },
    smallYellow: function() {
        this.pushYellow();
        view.displaySmallPush("yellow");  
    },
    pushBlue: function() {
        model.buttonPress("blue");
    },
    smallBlue: function() {
        this.pushBlue();
        view.displaySmallPush("blue");
    },
    gameTypeUp: function() {
        model.setGameType("up");
        view.shiftGameType("up");
    },
    gameTypeDown: function() {
        model.setGameType("down");
        view.shiftGameType("down");
    },
    skillLevelUp: function() {
        model.setSkillLevel("up");
        view.shiftSkillLevel("up");
    },
    skillLevelDown: function() {
        model.setSkillLevel("down");
        view.shiftSkillLevel("down");
    },
    pushLast: function() {
        model.scoreCheckAvailable();
        if (model.onAndIdle) {
            if (model.currentLastScore) {
                audio.lastScore(model.currentLastScore);
            } else {
                audio.lastScore(model.lastScore);
            }
        }
    },
    pushStart: function() {
        if (model.gameTwoStart) {
            model.playPlayerSequence(model.skillLevel);
        } else if (!model.gameTwoStart) {
            model.startGame();
        }
    },
    pushLongest: function() {
        model.scoreCheckAvailable();
        if (model.onAndIdle) {
            if (model.currentLongestScore) {
                audio.longestScore(model.currentLongestScore);
            } else {
                audio.longestScore(model.longestScore);
            }
        }
    },
    powerOff: function() {
        audio.poweringOff();
        location.reload();
    },
    powerOn: function() {
        model.setPowerStatus("On");
        view.shiftPower("On");
        audio.firstSound();
        audio.poweringOn();
    }
}

// View
const view = {
    displaySmallPush: function(color) {
        if (color === "green") {
            $("#green").addClass("small-button-click");
            setTimeout(() => {
                $("#green").removeClass("small-button-click");
            }, 100)
        } else if (color === "red") {
            $("#red").addClass("small-button-click");
            setTimeout(() => {
            $("#red").removeClass("small-button-click");
            }, 100)
        } else if (color === "yellow") {
            $("#yellow").addClass("small-button-click");
            setTimeout(() => {
            $("#yellow").removeClass("small-button-click");
            }, 100)
        } else {
            $("#blue").addClass("small-button-click");
            setTimeout(() => {
            $("#blue").removeClass("small-button-click");
            }, 100) 
        }
    },
    pressYellow: function() {
        $("#bottom-left").css("background-color", "#e0c828");
        setTimeout(() => {
            $("#bottom-left").css("background-color", "#d1ba25");
        }, 100)
    },
    shiftGameType: function(direction) {
        if (direction === "up") {
            if ($(".short-switch-container").attr("id") === "short-switch-container1") {
                $(".short-switch-container").attr("id", "short-switch-container2")
            } else if ($(".short-switch-container").attr("id") === "short-switch-container2") {
                $(".short-switch-container").attr("id", "short-switch-container3")
            };
        } else {
            if ($(".short-switch-container").attr("id") === "short-switch-container3") {
                $(".short-switch-container").attr("id", "short-switch-container2")
            } else if ($(".short-switch-container").attr("id") === "short-switch-container2") {
                $(".short-switch-container").attr("id", "short-switch-container1")
            }
        }
    },
    shiftSkillLevel: function(direction) {
        if (direction === "up") {
            if ($(".long-switch-container").attr("id") === "long-switch-container1") {
                $(".long-switch-container").attr("id", "long-switch-container2")
            } else if ($(".long-switch-container").attr("id") === "long-switch-container2") {
                $(".long-switch-container").attr("id", "long-switch-container3")
            } else if ($(".long-switch-container").attr("id") === "long-switch-container3") {
                $(".long-switch-container").attr("id", "long-switch-container4")
            }
        } else {
            if ($(".long-switch-container").attr("id") === "long-switch-container4") {
                $(".long-switch-container").attr("id", "long-switch-container3")
            } else if ($(".long-switch-container").attr("id") === "long-switch-container3") {
                $(".long-switch-container").attr("id", "long-switch-container2")
            } else if ($(".long-switch-container").attr("id") === "long-switch-container2") {
                $(".long-switch-container").attr("id", "long-switch-container1")
            }
        }
    },
    shiftPower: function(status) {
        if (status === "Off") {
            $(".toggle-power").attr("id", "off");
        } else {
            $(".toggle-power").attr("id", "on");
        }
    },
    lightUpButton: function(button, skillLevel) {
            let adjustment = (skillLevel * 100) - 100;
            let delay = 500 - adjustment;
            setTimeout(() => {
                if (button === 1) {
                    $("#green").removeClass("button").addClass("active-button");
                    audio.playButtonSound(button);
                    setTimeout(() => {
                        $("#green").removeClass("active-button").addClass("button");
                    }, delay)
                } else if (button === 2) {
                    $("#red").removeClass("button").addClass("active-button");
                    audio.playButtonSound(button);
                    setTimeout(() => {
                        $("#red").removeClass("active-button").addClass("button");
                    }, delay)
                } else if (button === 3) {
                    $("#yellow").removeClass("button").addClass("active-button");
                    audio.playButtonSound(button);
                    setTimeout(() => {
                        $("#yellow").removeClass("active-button").addClass("button");
                    }, delay)
                } else if (button === 4) {
                    $("#blue").removeClass("button").addClass("active-button");
                    audio.playButtonSound(button);
                    setTimeout(() => {
                        $("#blue").removeClass("active-button").addClass("button");
                    }, delay)
                }
            }, 500)
    }, 
    askPlayerCount: function() {
        $("#red").removeClass("button").addClass("active-button");
        setTimeout(() => {
            $("#red").removeClass("active-button").addClass("button");
        }, 500)
        $("#yellow").removeClass("button").addClass("active-button");
        setTimeout(() => {
            $("#yellow").removeClass("active-button").addClass("button");
        }, 500)
        $("#blue").removeClass("button").addClass("active-button");
        setTimeout(() => {
            $("#blue").removeClass("active-button").addClass("button");
        }, 500)   
    },
    congratulate: function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    $("#green").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#green").removeClass("active-button").addClass("button");
                    }, 500)
                    $("#red").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#red").removeClass("active-button").addClass("button");
                    }, 500)
                    $("#yellow").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#yellow").removeClass("active-button").addClass("button");
                    }, 500)
                    $("#blue").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#blue").removeClass("active-button").addClass("button");
                    }, 500)   
                }, i * 1200);
            }, 1500);
        }
    },
    initTouches: function() {
        $("#green").on("touchstart", () => {
            $("#green").removeClass("button").addClass("active-button");
            audio.playButtonSound(button);
            setTimeout(() => {
                $("#green").removeClass("active-button").addClass("button");
            }, 400)
        })
        $("#red").on("touchstart", () => {
            $("#red").removeClass("button").addClass("active-button");
            audio.playButtonSound(button);
            setTimeout(() => {
                $("#red").removeClass("active-button").addClass("button");
            }, 400)
        })
        $("#yellow").on("touchstart", () => {
            $("#yellow").removeClass("button").addClass("active-button");
            audio.playButtonSound(button);
            setTimeout(() => {
                $("#yellow").removeClass("active-button").addClass("button");
            }, 400)
        })
        $("#blue").on("touchstart", () => {
            $("#blue").removeClass("button").addClass("active-button");
            audio.playButtonSound(button);
            setTimeout(() => {
                $("#blue").removeClass("active-button").addClass("button");
            }, 400)
        })
    }
}

// Audio
const audio = {
    poweringOn: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Power On";
        speechSynthesis.speak(msg);
    },
    poweringOff: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Power Off";
        speechSynthesis.speak(msg);
    },
    lastScore: function(lastScore) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Last Score " + lastScore;
        speechSynthesis.speak(msg);
    },
    startingGame: function(startingMessage) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = startingMessage;
        speechSynthesis.speak(msg);
    },
    longestScore: function(longestScore) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Longest score " + longestScore;
        speechSynthesis.speak(msg);
    },
    finalScore: function(finalScore) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Final score " + finalScore;
        speechSynthesis.speak(msg);
    },
    endingGame: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Ending game";
        speechSynthesis.speak(msg);
    },
    tryAgain: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Simon wins, Game Over";
        speechSynthesis.speak(msg);
    },
    wrongMove: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Wrong move, Game Over";
        speechSynthesis.speak(msg);
    },
    getPlayerArray: function(skillLevel) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = `Push ${skillLevel * 10} buttons to create your sequence`;
        speechSynthesis.speak(msg);
    },
    createPlayStart: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Press start to begin";
        speechSynthesis.speak(msg);
    },
    askPlayerCount: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Red for 2 players. Yellow for 3 players. Blue for 4 players.";
        speechSynthesis.speak(msg);
    },
    youAreEliminated: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "You are eliminated";
        speechSynthesis.speak(msg);
        setTimeout(() => {
            this.allPlayers();
        }, 500);
    },
    allPlayers: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "All players who can";
        speechSynthesis.speak(msg);
        setTimeout(() => {
            this.moveUp();
        }, 500);
    },
    moveUp: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Move up and take over your new player number and color";
        speechSynthesis.speak(msg);
        setTimeout(() => {
            this.roundStarting();
        }, 500);
    },
    roundStarting: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = "Next round starting";
        speechSynthesis.speak(msg);
    },
    annouceWinner: function(player) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = `Player ${player} has won team elimination`;
        speechSynthesis.speak(msg);
    },
    congratulate: function(gameLevel, skillLevel) {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = `Congratulations for beating Simon on game level ${gameLevel} and skill level ${skillLevel}`;
        speechSynthesis.speak(msg);
    },
    secondaryCongratulate: function() {
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 0;
        msg.text = `Congratulations for reecreating the sequence`;
        speechSynthesis.speak(msg);
    },
    initSounds: function() {
        this.greenButton = new Audio("assets/button-sounds/green-button-128kb.mp3");
        this.redButton = new Audio("assets/button-sounds/red-button-128kb.mp3");
        this.yellowButton = new Audio("assets/button-sounds/yellow-button-128kb.mp3");
        this.blueButton = new Audio("assets/button-sounds/blue-button-128kb.mp3");
    },
    firstSound: function() {
        this.greenButton.volume = 0.1;
        this.redButton.volume = 0.1;
        this.yellowButton.volume = 0.1;
        this.blueButton.volume = 0.1;
        this.greenButton.play();
        this.redButton.play();
        this.yellowButton.play();
        this.blueButton.play();
        setTimeout(() => {
            this.greenButton.volume = 1;
            this.redButton.volume = 1;
            this.yellowButton.volume = 1;
            this.blueButton.volume = 1;
        }, 1000);
    },
    greenButton: {},
    redButton: {},
    yellowButton: {},
    blueButton: {},
    playButtonSound: function(button) {
        if (button === 1) {
            this.greenButton.play();
        } else if (button === 2) {
            this.redButton.play();
        } else if (button === 3) {
            this.yellowButton.play();
        } else {
            this.blueButton.play();
        }
    }
}

// Model
const model = {
    gameType: 1,
    setGameType: function(direction) {
        if (direction === "up" && this.gameType < 3) {
            this.gameType = this.gameType + 1;
        } else if (direction === "down" && this.gameType > 1) {
            this.gameType = this.gameType - 1;
        }
    },
    skillLevel: 1,
    setSkillLevel: function(direction) {
        if (direction === "up" && this.skillLevel < 4) {
            this.skillLevel = this.skillLevel + 1;
        } else if (direction === "down" && this.skillLevel > 1) {
            this.skillLevel = this.skillLevel - 1;
        }
    },
    currentLastScore: 0,
    lastScore: this.currentLastScore ? this.currentLastScore : localStorage.getItem("lastScore") ? localStorage.getItem("lastScore") : 0,
    activeGame: false,
    startGame: function() {
        if (this.powerStatus === "On" && !this.activeGame) {
            this.activeGame = true;
            this.onAndIdle = false;
            if (this.gameType === 1) {
                audio.startingGame("Solo vs. Simon");
                setTimeout(() => {
                    game.buildSoloGame(this.skillLevel);
                }, 2000);
            } else if (this.gameType === 2) {
                audio.startingGame("Create and Play");
                setTimeout(() => {
                    this.playPVPGame(this.skillLevel);
                }, 1500);
            } else {
                audio.startingGame("Team Elimination vs. Simon");
                this.askPlayerCount();
                setTimeout(() => {
                    if (!this.playerCount) {
                        this.waitingPlayerCount = false;
                        audio.endingGame();
                        return;
                    }
                }, 19000);
            }
        }
    },
    currentLongestScore: 0,
    longestScore: this.currentLongestScore ? this.currentLongestScore : localStorage.getItem("longestScore") ? localStorage.getItem("longestScore") : 0,
    powerStatus: "Off",
    setPowerStatus: function(status) {
        if (status === "Off") {
            this.activeGame = false;
            this.powerStatus = "Off";
        } else {
            this.powerStatus = "On";
        }
    },
    onAndIdle: false,
    scoreCheckAvailable: function() {
        if (this.powerStatus === "On" && !this.activeGame) {
            this.onAndIdle = true;
        }
    },
    playCPUGame: function(simonsArray, skillLevel) {
        this.fullSequence = simonsArray;
        this.currentSequence = simonsArray.slice(0, 1);
        this.playSequence(skillLevel);
    },
    playPVPGame: function(skillLevel) {
        this.activeGame = true;
        audio.getPlayerArray(this.skillLevel);
        this.enterPlayerArray = true;
        setTimeout(() => {
            if (!this.playerArray.length) {
                audio.endingGame();
                return;
            }
        }, (skillLevel * 15000) + 4000)
    },
    fullSequence: [],
    currentSequence: [],
    passThrough: 0,
    playSequence: function(skillLevel) {
        if (this.passThrough === 0) {
            this.passThrough = this.passThrough - 1;
                setTimeout(() => {
                    if (this.passThrough === -1) {
                        audio.tryAgain();
                        this.endGame();
                        return;
                    }
                }, 9500);
                setTimeout(() => {
                    for (let i = 0; i < this.currentSequence.length; i++) {
                        setTimeout(() => {
                            view.lightUpButton(this.currentSequence[i], skillLevel);
                            // audio.playButtonSound(this.currentSequence[i]);
                            if (i === (this.currentSequence.length - 1)) {
                                setTimeout(() => {
                                    this.toggleButtons();
                                }, 1000);
                            }
                        }, i * 1000);
                    }
                }, 2000);
        } else {
            this.passThrough = this.passThrough + 2;
            let tempPT = this.passThrough;
                setTimeout(() => {
                    if (this.passThrough === tempPT) {
                        audio.tryAgain();
                        this.endGame();
                        return;
                    }
                }, (this.currentSequence.length * (3000 - (skillLevel * 500))) + 7000);    
                setTimeout(() => {
                for (let i = 0; i < this.currentSequence.length; i++) {
                    setTimeout(() => {
                        view.lightUpButton(this.currentSequence[i], skillLevel);
                        // audio.playButtonSound(this.currentSequence[i]);
                        if (i === (this.currentSequence.length - 1)) {
                            setTimeout(() => {
                                this.toggleButtons();
                            }, 1000);
                        }
                    }, i * ((1000 / skillLevel) + 100));
                }
            }, 1000)
        } 
    },
    playPlayerSequence: function(skillLevel) {
        setTimeout(() => {
            for (let i = 0; i < this.playerArray.length; i++) {
                setTimeout(() => {
                    view.lightUpButton(this.playerArray[i], skillLevel);
                    // audio.playButtonSound(this.playerArray[i]);
                    if (i === (this.playerArray.length - 1)) {
                        setTimeout(() => {
                            this.toggleButtons();
                        }, 1000);
                    }
                },  i * ((1000 / skillLevel) + 100));
            }
        }, 2000)
    },
    buttonsActive: false,
    toggleButtons: function() {
        if (this.buttonsActive) {
            this.buttonsActive = false;
        } else {
            this.buttonsActive = true;
        }
    },
    buttonMap: {"green": 1, "red": 2, "yellow": 3, "blue": 4},
    buttonPresses: 0,
    buttonPress: function(color) {
        if (this.enterPlayerArray) {
            audio.playButtonSound(this.buttonMap[color]);
            if (this.playerArray.length === (this.skillLevel * 10) - 1) {
                this.playerArray.push(this.buttonMap[color])
                this.enterPlayerArray = false;
                audio.createPlayStart();
                setTimeout(() => {
                    this.gameTwoStart = true;
                }, 1000)
            } else {
                this.playerArray.push(this.buttonMap[color])
            }
        } else if (this.waitingPlayerCount) {
            audio.playButtonSound(this.buttonMap[color]);
            if (this.buttonMap[color] > 1) {
                this.playerCount = this.buttonMap[color];
                this.waitingPlayerCount = false;
                game.buildTeamGame(this.playerCount, this.skillLevel);
            }
        } else if (this.buttonsActive) {
            audio.playButtonSound(this.buttonMap[color]);
            if (this.buttonMap[color] === this.playerArray[this.buttonPresses]) {
                this.buttonPresses = this.buttonPresses + 1;
            } else if (this.buttonMap[color] === this.currentSequence[this.buttonPresses]) {
                this.buttonPresses = this.buttonPresses + 1;
            } else if (this.gameType === 1) {
                audio.tryAgain();
                this.endGame();
                return;
            } else if (this.gameType === 2) {
                setTimeout(() => {
                    audio.wrongMove();
                    this.endGame();
                return;
                }, 500)
            } else if (this.fullSequence.indexOf(this.buttonMap[color]) !== -1) {
                this.eliminatePlayer(this.buttonMap[color]);
            }
            
            if (this.gameType !== 2) {
                if (this.buttonPresses === this.fullSequence.length) {
                    view.congratulate();
                    audio.congratulate();
                    this.endGame();
                } else if (this.buttonPresses === this.currentSequence.length) {
                    this.buttonPresses = 0;
                    this.currentSequence = this.fullSequence.slice(0, (this.currentSequence.length + 1));
                    this.toggleButtons();
                    this.activeGame = false;
                    this.playSequence(this.skillLevel);
                } 
            } else {
                if (this.buttonPresses === this.playerArray.length) {
                    view.congratulate();
                    audio.secondaryCongratulate();
                    this.endGame();
                }
            }
        } 
    },
    enterPlayerArray: false,
    playerArray: [],
    gameTwoStart: false,
    playerCount: 0,
    askPlayerCount: function() {
        audio.askPlayerCount();
        setTimeout(() => {
            this.waitingPlayerCount = true;
            view.askPlayerCount();
        }, 8750)
    },
    waitingPlayerCount: false,
    eliminatePlayer: function(player) {
        this.playerCount = this.playerCount - 1;
        if (player === 2 && this.playerCount === 1) {
            audio.annouceWinner(1);
            this.passThrough = 0;
            this.endGame();
        } else if (player === 1 && this.playerCount === 1) {
            audio.annouceWinner(2);
            this.passThrough = 0;
            this.endGame();
        } else {
            this.toggleButtons();
            this.activeGame = false;
            audio.youAreEliminated();
            this.passThrough = 2;
            setTimeout(() => {
                game.buildTeamGame(this.playerCount, this.skillLevel);
            }, 10000);
        }
    },
    gameScore: 0,
    endGame: function() {
        let finalScore;
        if (this.currentSequence.length > 0) {
            finalScore = this.currentSequence.length - 1;
        } else {
            finalScore = this.buttonPresses;
        }
        audio.finalScore(finalScore);
        if (this.gameType === 1) {
            this.currentLastScore = finalScore;
            localStorage.setItem("lastScore", `${finalScore}`); 
            if (finalScore > this.longestScore) {
                this.currentLongestScore = finalScore;
                localStorage.setItem("longestScore", `${finalScore}`); 
            }   
        }
        if (this.gameTwoStart) {
            this.gameTwoStart = false;
            this.playerArray = [];
        }
        if (this.playerCount) {
            this.playerCount = 0;
        }
        this.buttonPresses = 0;
        this.passThrough = 0;
        this.currentSequence = [];
        this.toggleButtons();
        setTimeout(() => {
            this.activeGame = false;
        }, 4500)
    },
    initGame: function() {
        view.initTouches();
        audio.initSounds();
    }
}

// Game
const game = {
    buildSoloGame: function(skillLevel) {
        let simonsArray = [];
        for (let i = 1; i <= 100; i++) {
            simonsArray.push(Math.floor(Math.random() * 4) + 1);
        }
        let adjustment = (skillLevel * 0.25) * 100;
        model.playCPUGame(simonsArray.slice(0, adjustment), skillLevel);
    },
    buildTeamGame: function(playerCount, skillLevel) {
        let simonsArray = [];
        for (let i = 1; i <= 100; i++) {
            simonsArray.push(Math.floor(Math.random() * playerCount) + 1);
        }
        let adjustment = (skillLevel * 0.25) * 100;
        model.playCPUGame(simonsArray.slice(0, adjustment), skillLevel);
    }
}