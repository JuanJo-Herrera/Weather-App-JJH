# 📝 Weather App

Una aplicación para consultar el clima de tú ciudad.

## ✨ ¿Cómo usar?


- ✅  1. Escribe una ciudad en el input                   📊
   v
[Formulario de búsqueda]
   - Controlado con useState(cityInput)
   - Botón "Agregar ciudad"
 
   |

- ✅  2. Submit                                           💾
   v
[Lista de ciudades guardadas]
   - Estado useState(cities = [...])
   - Evitamos duplicados
   - Renderizamos una tarjeta por ciudad
   |

- ✅  3. Por cada ciudad en cities
   v
[<WeatherCard city="aguascalientes" />]                    🔍
   - Cuando recibe la prop city:
        - usa useEffect para "simular fetch"
        - busca datos en FAKE_WEATHER_DB
        - muestra:
            • Temperatura
            • Condición
            • Humedad
            • Estados: "loading", "ready", "error"
   |
- ✅  4. Botón "✕" en cada tarjet
   v
[Remover ciudad de la lista]                                🗑️
   - setCities(cities.filter(...))

- 🎨 Extra:
[Botón Contador ajeno]
   - Cambia unrelatedCount
   - No tiene nada que ver con el clima
   - Lo usamos para demostrar React.memo
```


Mi Dashboard de Clima
[Contador ajeno: 3] [Incrementar]

[ input: "Aguascalientes"          ][Agregar ciudad]

-----------------------------
aguascalientes       [✕]
26°C — Soleado
Humedad: 30%
-----------------------------

guadalajara          [✕]
24°C — Parcialmente nublado
Humedad: 40%
-----------------------------

monterrey            [✕]
32°C — Calor seco 🔥
Humedad: 20%
-----------------------------
