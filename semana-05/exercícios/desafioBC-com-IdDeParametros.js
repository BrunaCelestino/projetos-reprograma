const tabelaDeConversao = {
    "DNA": "RNA",
    "Adenina (A)": "Uracila (U)",
    "Guanina (G)": "Citosina (C)",
    "Timina (T)": "Adenina (A)",
    "Citosina (C)": "Guanina (G)"
}
let rna = []
let foraDosParametros = []
class FilamentoDNA {
    constructor(sequencia) {
        this.sequencia = sequencia

    }

    converteParaRNA(DNA) {
        if (typeof (DNA) == "string") {
            DNA = DNA.toUpperCase()
            let stringToArray = DNA.split("")


            stringToArray.forEach(base => {

                if (base == "G") {
                    base = "C"
                    rna.push(base)

                } else if (base == "C") {
                    base = "G"
                    rna.push(base)

                } else if (base == "T") {
                    base = "A"
                    rna.push(base)

                } else if (base == "A") {
                    base = "U"
                    rna.push(base)
                } else {
                    foraDosParametros.push(base)


                }
            });


            let foraParametros = foraDosParametros.join("")
            let Dna = DNA
            let arrayToString = rna.join("")
            let Rna = arrayToString
            let removido = foraParametros

            if (foraDosParametros.length > 0) {
                console.log("PARAMETROS DE CONVERSÃO")
                console.table(tabelaDeConversao)
                console.log(`Exite ${foraDosParametros.length} elemento(s) fora dos parametros de conversão, sendo ele(s): (${removido})`)
                
                console.log(`O DNA inserido: ${DNA}, teve o(s) elemento(s): "${removido}" removido(s)  e foi convertido para o RNA: ${Rna}.`)
                console.table({ Dna, removido, Rna })
            } else {
                console.log("PARAMETROS DE CONVERSÃO")
                console.table(tabelaDeConversao)
                console.log(`O filamento de DNA inserido: ${DNA}, foi convertido para o RNA: ${Rna}.`)
                console.table({ Dna, Rna })
            }



        } else {
            console.log("Esse não é um filamento de DNA válido.")
        }
    }
}

const novoDNA = new FilamentoDNA("ATGCCGAAATTTGCG");

novoDNA.converteParaRNA(novoDNA.sequencia)




