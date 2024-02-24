// Controller
const controller = {
    pushGreen: function() {

    },
    smallGreen: function() {
        this.pushGreen();
        view.displaySmallPush("green");
    },
    pushRed: function() {

    },
    smallRed: function() {
        this.pushRed();
        view.displaySmallPush("red");
    },
    pushYellow: function() {

    },
    smallYellow: function() {
        this.pushYellow();
        view.displaySmallPush("yellow");  
    },
    pushBlue: function() {

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
    },
    powerOn: function() {
        model.setPowerStatus("On");
        view.shiftPower("On");
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
    lightUpSequence: function(sequence) {
        for (let i = 0; i < sequence.length; i++) {
                console.log(sequence[i])
                if (sequence[i] === 1) {
                    setTimeout(() => {}, 1000)
                    $("#green").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#green").removeClass("active-button");
                    }, 300)
                    $("#green").addClass("button");
                } else if (sequence[i] === 2) {
                    setTimeout(() => {}, 1000)
                    $("#red").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#red").removeClass("active-button");
                    }, 300)
                    $("#red").addClass("button");
                } else if (sequence[i] === 3) {
                    setTimeout(() => {}, 1000)
                    $("#yellow").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#yellow").removeClass("active-button");
                    }, 300)
                    $("#yellow").addClass("button");
                } else if (sequence[i] === 4) {
                    setTimeout(() => {}, 1000)
                    $("#blue").removeClass("button").addClass("active-button");
                    setTimeout(() => {
                        $("#blue").removeClass("active-button");
                    }, 300)
                    $("#blue").addClass("button");
                }
        }
    }
}

// Audio
const audio = {
    lastScore: function(lastScore) {
        console.log(lastScore)
    },
    longestScore: function(longestScore) {
        console.log(longestScore)
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
            game.buildGame(this.gameType, this.skillLevel);
            console.log("Starting Simon")
            console.log(this.activeGame)
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
    playCPUGame: function(simonsArray, skillLevel) {
        console.log(simonsArray)
        view.lightUpSequence(simonsArray);

    },
    playPVPGame: function(playerOneArray, playerTwoArray, adjustment, skillLevel) {

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
        model.playCPUGame(simonsArray.slice(0, adjustment), skillLevel);
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
        model.playCPUGame(simonsArray.slice(0, adjustment), skillLevel);
    }
}