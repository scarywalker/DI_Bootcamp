from translate import Translator
translator= Translator(from_lang="french", to_lang="English")
french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translation = {}
for index in range(len(french_words)):
    translation[french_words[index]] = translator.translate(french_words[index])
print(translation)