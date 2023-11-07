
def hangman(word):
    wrong_guesses = 0
    stages = ["", "________      ", "|      |      ", "|      0      ", "|     /|\     ", "|     / \     ", "|"]
    remaining_letters = list(word)
    letter_board = ["__"] * len(word)
    win = False
    print('Bem vindo à forca')
    while wrong_guesses < len(stages) - 1:
        print('\n')
        guess = input("Diga uma letra: ")
        if guess in remaining_letters:
            character_index = remaining_letters.index(guess)
            letter_board[character_index] = guess
            remaining_letters[character_index] = '$'
        else:
            wrong_guesses += 1
        print((' '.join(letter_board)))
        print('\n'.join(stages[0: wrong_guesses + 1]))
        if '__' not in letter_board:
            print('Você Ganhou, a Palavra é: ')
            print(' '.join(letter_board))
            win = True
            break
    if not win:
        print('\n'.join(stages[0: wrong_guesses]))
        print('Você perdeu, a palavra é:  {}'.format(word))

hangman("jaboticaba")