let rna = []

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
                }
            });

            let arrayToString = rna.join("")
            let RNA = arrayToString
            console.log(`O seu filamento de DNA: ${DNA}, foi convertido para o RNA: ${RNA}.`)
            console.table({ DNA, RNA })

        } else {
            console.log("Esse não é um filamento de DNA válido.")
        }
    }
}

const novoDNA = new FilamentoDNA("atgccgaaatttgcg");

novoDNA.converteParaRNA(novoDNA.sequencia)