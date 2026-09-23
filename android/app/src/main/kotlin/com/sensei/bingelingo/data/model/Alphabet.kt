package com.sensei.bingelingo.data.model

data class AlphabetCharacter(
    val char: String,
    val pronunciation: String
)

data class AlphabetTab(
    val id: String,
    val label: String,
    val characters: List<AlphabetCharacter>
)

data class AlphabetSet(
    val languageName: String,
    val title: String,
    val description: String,
    val tabs: List<AlphabetTab>
)
