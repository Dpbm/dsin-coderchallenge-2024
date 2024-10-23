import pandas as pd
import numpy as np

"""
Encoding:

damage level           |encoding       |
-----------------------|---------------|
Perda Total            | 0             |
Muito Destruído        | 1             |
Praticamente Destruído | 2             |
Praticamente Intacto   | 3             |
Sem Avarias            | 4             |


size      |encoding |
----------|---------|
Pequeno   | 0       |
Médio     | 1       |
Grande    | 2       |
Colossal  | 3       |


gas             |encoding  |
----------------|----------|
Milho           | 1        |
Vaca            | 1        |
Humanos         | 1        |
Poeira Cósmica  | 4        |
Buraco Negro    | 4        |
Hamster         | 2        |  
Raios           | 4        |
Planetas        | 4        |
Supernova       | 4        |
Água            | 3        |
Hidrogênio      | 3        |
Irídio          | 5        |


label                         |encoding |
------------------------------|---------|
Sucata Espacial               | 0       |
Joia Tecnológica              | 1       |
Arsenal Alienígena            | 2       |
Ameaça em Potencial           | 3       |
Fonte de Energia Alternativa  | 4       |


"""

features = pd.DataFrame({
    "value":         np.array([4, 2, 3, 4, 1, 5, 1, 2,  7, 6, 6, 9, 8, 10, 9, 7,  5, 4, 5,  3, 6,  7, 4, 5,  8,  6, 3, 9, 10, 6, 4, 5,   4, 7, 5, 2, 3, 6, 5, 6], dtype=np.float32)*0.1,
    "military_power":np.array([2, 4, 3, 3, 5, 1, 2, 3,  6, 4, 7, 3, 2, 5,  4, 1,  8, 9, 10, 7, 10, 8, 9, 9,  10, 9, 7, 8, 10, 7, 9, 10,  3, 2, 6, 1, 5, 4, 7, 3], dtype=np.float32)*0.1,
    "damage":        np.array([0, 1, 0, 2, 1, 1, 2, 0,  4, 3, 2, 4, 2, 3,  4, 2,  0, 1, 0,  2, 1,  1, 1, 0,  4,  3, 3, 4, 4,  3, 2, 3,   3, 2, 3, 4, 3, 4, 2, 1], dtype=np.float32)*0.25,
    "size":          np.array([1, 2, 1, 0, 3, 2, 3, 0,  1, 3, 3, 0, 2, 1,  2, 3,  3, 1, 2,  3, 2,  0, 1, 2,  3,  2, 2, 1, 3,  1, 3, 3,   3, 1, 3, 2, 2, 3, 2, 0], dtype=np.float32)*(1/3),
    "danger":        np.array([1, 4, 2, 5, 3, 2, 3, 2,  3, 4, 5, 2, 1, 3,  2, 0,  3, 5, 4,  6, 5,  2, 6, 3,  10, 8, 7, 9, 10, 8, 8, 9,   3, 0, 5, 0, 4, 2, 6, 0], dtype=np.float32)*0.1,
    "gas":           np.array([2, 1, 3, 1, 2, 2, 1, 3,  4, 4, 3, 4, 5, 5,  3, 2,  2, 4, 3,  2, 1,  3, 2, 2,  2,  1, 4, 3, 4,  2, 1, 4,   5, 5, 1, 4, 5, 1, 1, 4], dtype=np.float32)*0.2,   
},columns=["value", "military_power", "damage", "size", "danger", "gas"])

labels = pd.Series([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4], dtype=np.uint8)
