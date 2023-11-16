let playerHealth = 100;
        let enemyHealth = 100;

        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        function attack() {
            const playerRoll = rollDice();
            const enemyRoll = rollDice();

            if (playerRoll > enemyRoll) {
                const damage = playerRoll - enemyRoll;
                enemyHealth -= damage;
                document.getElementById("result").innerText = `Você atacou com sucesso! Inimigo sofreu ${damage} de dano. Vida do inimigo: ${enemyHealth}`;
            } else {
                document.getElementById("result").innerText = "Seu ataque falhou. O inimigo contra-ataca!";
                const enemyDamage = enemyRoll - playerRoll;
                playerHealth -= enemyDamage;
                document.getElementById("result").innerText += ` Você sofreu ${enemyDamage} de dano. Sua vida: ${playerHealth}`;
            }

            checkGameOver();
        }

        function dodge() {
            const playerRoll = rollDice();
            const enemyRoll = rollDice();

            if (playerRoll > enemyRoll) {
                document.getElementById("result").innerText = "Você conseguiu se esquivar! O inimigo errou o ataque.";
            } else {
                document.getElementById("result").innerText = "Você tentou se esquivar, mas o inimigo acertou!";
                const enemyDamage = enemyRoll - playerRoll;
                playerHealth -= enemyDamage;
                document.getElementById("result").innerText += ` Você sofreu ${enemyDamage} de dano. Sua vida: ${playerHealth}`;
            }

            checkGameOver();
        }

        function checkGameOver() {
            if (playerHealth <= 0) {
                document.getElementById("result").innerText = "Você foi derrotado! Fim de jogo.";
                disableButtons();
            } else if (enemyHealth <= 0) {
                document.getElementById("result").innerText = "Você derrotou o inimigo! Parabéns, você venceu!";
                disableButtons();
            }
        }

        function disableButtons() {
            document.querySelectorAll("button").forEach(button => {
                button.disabled = true;
            });
        }