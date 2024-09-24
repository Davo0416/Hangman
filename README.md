# [Play](https://Davo0416.github.io/Hangman/)

# **Description**
A Web-based version of the game Hangman made using VSCode and Krita. The games goal is to guess the hidden word by inputing letters or the word itself.
</br>
![image](https://github.com/user-attachments/assets/827c9e8b-2a8c-4949-bc66-f9388866e5df)

# **How does it work**
The game chooses the secret word randomly from ~250 words. The secret word gets converted into an array of letters to make its processing easier. The input is validated to only be not already guessed letters or 
the secret word itself. After each inputed letter the code compares it to each of the letters in the array and reveals them accordingly. If the inputted letter has been already guessed the user is asked to try again. 
The program keeps track of this by adding each unique input letter to another array. Else if the inputted letter is not present in the array (secret word) the player loses one of his 7 lifes.
