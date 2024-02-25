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
            audio.lastScore(model.lastScore);
        }
    },
    pushStart: function() {
        model.startGame();
    },
    pushLongest: function() {
        model.scoreCheckAvailable();
        if (model.onAndIdle) {
            audio.longestScore(model.longestScore);
        }
    },
    powerOff: function() {
        model.setPowerStatus("Off");
        view.shiftPower("Off");
        view.poweringOff();
    },
    powerOn: function() {
        model.setPowerStatus("On");
        view.shiftPower("On");
        view.poweringOn();
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
    lightUpButton: function(button) {
            setTimeout(() => {
                if (button === 1) {
                    $("#green").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#green").removeClass("active-button").addClass("button");
                    }, 500)
                } else if (button === 2) {
                    $("#red").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#red").removeClass("active-button").addClass("button");
                    }, 500)
                } else if (button === 3) {
                    $("#yellow").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#yellow").removeClass("active-button").addClass("button");
                    }, 500)
                } else if (button === 4) {
                    $("#blue").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#blue").removeClass("active-button").addClass("button");
                    }, 500)
                }
            }, 500)
    },
    poweringOff: function() {
        $("#green").attr("id", "green-off");
        $("#red").attr("id", "red-off");
        $("#yellow").attr("id", "yellow-off");
        $("#blue").attr("id", "blue-off");
    },
    poweringOn: function() {
        $("#green-off").attr("id", "green");
        $("#red-off").attr("id", "red");
        $("#yellow-off").attr("id", "yellow");
        $("#blue-off").attr("id", "blue");
    }
}

// Audio
const audio = {
    lastScore: function(lastScore) {
        console.log(lastScore)
    },
    longestScore: function(longestScore) {
        console.log(longestScore)
    },
    playButtonSound: function() {
        console.log("playing button sound..")
    },
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
        console.log(this.gameType)
    },
    skillLevel: 1,
    setSkillLevel: function(direction) {
        if (direction === "up" && this.skillLevel < 4) {
            this.skillLevel = this.skillLevel + 1;
        } else if (direction === "down" && this.skillLevel > 1) {
            this.skillLevel = this.skillLevel - 1;
        }
        console.log(this.skillLevel)
    },
    lastScore: 25,
    setLastScore: function() {

    },
    activeGame: false,
    startGame: function() {
        if (this.powerStatus === "On" && !this.activeGame) {
            this.activeGame = true;
            this.onAndIdle = false;
            console.log("Starting Simon")
            console.log(this.activeGame)
            game.buildGame(this.gameType, this.skillLevel);
        }
    },
    longestScore: 50,
    setLongestScore: function() {

    },
    powerStatus: "Off",
    setPowerStatus: function(status) {
        if (status === "Off") {
            this.activeGame = false;
            this.powerStatus = "Off";
        } else {
            this.powerStatus = "On";
        }
        console.log(this.powerStatus)
    },
    onAndIdle: false,
    scoreCheckAvailable: function() {
        if (this.powerStatus === "On" && !this.activeGame) {
            this.onAndIdle = true;
        }
    },
    playSoloGame: function(simonsArray, skillLevel) {
        this.fullSequence = simonsArray;
        this.currentSequence = simonsArray.slice(0, this.sequenceIndex);
        this.playSequence(skillLevel);
    },
    playPVPGame: function(playerOneArray, playerTwoArray, adjustment, skillLevel) {

    },
    playTeamGame: function(simonsArray, skillLevel) {

    },
    fullSequence: [],
    currentSequence: [],
    playerSequence: [],
    sequenceIndex: 1,
    playSequence: function(skillLevel) {
        // for (let i = 0; i < this.fullSequence.length; i++) {
        //     setTimeout(() => {
        //         if (document.getElementById("green-off")) {
        //             i = this.fullSequence.length + 1;
        //         }
        //         view.lightUpButton(this.fullSequence[i]);
        //         audio.playButtonSound(this.fullSequence[i]);
        //         if (i === (this.fullSequence.length - 1)) {
        //             setTimeout(() => {
        //                 this.toggleButtons();
        //                 this.awaitingPlayer(skillLevel);
        //             }, 1000);
        //         }
        //      }, i * 1000);
        // }
    },
    stopSequence: function(timeoutId) {
        console.log("Here")
        clearTimeout(timeoutId);
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
        if (this.buttonsActive) {
            if (buttonMap[color] ) {
                
            } else {
                
            }
        } 
    },
    awaitingPlayer: function(skillLevel) {
        console.log(skillLevel);
        console.log("Awaiting Player");
    },
    gameScore: 0,
    endGame: function() {
        this.lastScore = this.gameScore;
        if (this.gameScore > this.longestScore) {
            this.longestScore = this.gameScore;
        }
        this.gameScore = 0;
        this.awaitingPlayer = false;
        this.currentSequence = [];
        this.toggleButtons();
        this.activeGame = false;
    }
}

// Game
const game = {
    buildGame: function(gameType, skillLevel) {
        if (gameType === 1) {
            this.soloGame(skillLevel);
        } else if (gameType === 2) {
            this.pvpGame(skillLevel);
        } else {
            this.teamGame(skillLevel);
        }
    },
    soloGame: function(skillLevel) {
        let simonsArray = [];
        for (let i = 1; i <= 100; i++) {
            simonsArray.push(Math.floor(Math.random() * 4) + 1);
        }
        let adjustment = (skillLevel * 0.25) * 100;
        model.playSoloGame(simonsArray.slice(0, adjustment), skillLevel);
    },
    pvpGame: function(skillLevel) {
        let playerOneArray = [];
        let playerTwoArray = [];
        let adjustment = (skillLevel * 0.25) * 100;
        model.playPVPGame(playerOneArray, playerTwoArray, adjustment, skillLevel);
    },
    teamGame: function(skillLevel) {
        let simonsArray = [];
        for (let i = 1; i <= 100; i++) {
            simonsArray.push(Math.floor(Math.random() * 4) + 1);
        }
        let adjustment = (skillLevel * 0.25) * 100;
        model.playTeamGame(simonsArray.slice(0, adjustment), skillLevel);
    }
}