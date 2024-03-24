def calcular_nivel(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas
    
    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"
    
    return saldo_vitorias, nivel

# Exemplo de uso da função
vitorias = int(input("Digite o número de vitórias: "))
derrotas = int(input("Digite o número de derrotas: "))

saldo, nivel = calcular_nivel(vitorias, derrotas)
print(f"O Herói tem um saldo de {saldo} vitórias e está no nível de {nivel}.")