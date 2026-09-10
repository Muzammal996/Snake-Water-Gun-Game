let userScore = 0;
        let cpuScore = 0;

        const choices = {"S": "🐍 Snake", "W": "💧 Water", "G": "🔫 Gun"};

        const match = (cpu, user) => {
            if(cpu === user) return "draw";
            else if((cpu === "S" && user === "W") || (cpu === "W" && user === "G") || (cpu === "G" && user === "S")) return "cpu";
            else if((user === "S" && cpu === "W") || (user === "W" && cpu === "G") || (user === "G" && cpu === "S")) return "user";
            else return "invalid";
        }

        function playGame() {
            let user = document.getElementById("userInput").value.toUpperCase();
            let cpu = ["S", "W", "G"][Math.floor(Math.random() * 3)];
            let result = match(cpu, user);

            if(result === "invalid") {
                document.getElementById("resultText").innerText = "❌ Invalid Input!";
                document.getElementById("resultText").style.color = "red";
                document.getElementById("choiceText").innerText = "Please enter only S, W, or G";
                return;
            }

            document.getElementById("choiceText").innerText = `You: ${choices[user]}  |  CPU: ${choices[cpu]}`;

            if(result === "user") {
                userScore++;
                document.getElementById("resultText").innerText = "🎉 YOU WIN!";
                document.getElementById("resultText").style.color = "#4ade80";
            }
            else if(result === "cpu") {
                cpuScore++;
                document.getElementById("resultText").innerText = "😢 CPU WINS!";
                document.getElementById("resultText").style.color = "#f87171";
            }
            else {
                document.getElementById("resultText").innerText = "🤝 DRAW!";
                document.getElementById("resultText").style.color = "#fbbf24";
            }

            document.getElementById("userScore").innerText = userScore;
            document.getElementById("cpuScore").innerText = cpuScore;
            document.getElementById("userInput").value = "";
        }

        // Enter key dabane se bhi chal jaye
        document.getElementById("userInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                playGame();
            }
        });

        function resetGame() {
            userScore = 0; cpuScore = 0;
            document.getElementById("userScore").innerText = 0;
            document.getElementById("cpuScore").innerText = 0;
            document.getElementById("resultText").innerText = "Enter your move";
            document.getElementById("resultText").style.color = "white";
            document.getElementById("choiceText").innerText = "";
        }