Objetivo
- Criar um vídeo de herói (10–15s, loop) com estética editorial premium, inspirado no clima do site Charles Marlow, porém original para a Biavati Imóveis (litoral do Paraná + capitais do estado).

Estilo e Direção
- Tom: minimalista, sofisticado, cores neutras com toques dourados sutis.
- Fotografia: luz dourada (golden hour) ou luz suave, contraste moderado, granulação leve opcional.
- Movimento: câmera lenta, fluida; pan/dolly/tilt discretos para um loop suave.
- Evitar: pessoas reconhecíveis, placas com marcas, elementos específicos do site de referência.

Prompts PT-BR (prontos para Runway/Pika/Luma)
1) Litoral do Paraná — plano aéreo
- "Sobrevoo cinematográfico em câmera lenta sobre o litoral do Paraná, ondas suaves, areia clara e casas à beira-mar de arquitetura minimalista, luz dourada ao entardecer, paleta neutra com detalhes em dourado discreto, textura de água realista, atmosfera tranquila, estética editorial de alto padrão, foco em linhas e formas. 24 fps, depth of field sutil, granulação leve, cor equilibrada, sem pessoas." 

2) Transição água → cidade (match cut sugerido na edição)
- "Close cinematográfico da superfície da água com reflexos dourados, transição suave e elegante para fachada moderna de edifício em Curitiba, vidro e concreto, linhas arquitetônicas limpas, paleta neutra, câmera em pan lento, atmosfera premium e silenciosa, sem marcas, sem pessoas, 24 fps, DOF sutil, granulação leve." 

3) Cidade — detalhe arquitetônico
- "Movimento de câmera em dolly lento por detalhes de fachada contemporânea, vidro refletindo céu no fim de tarde, sensação de exclusividade e precisão, paleta neutra e dourado sutil, composição minimalista, 24 fps, foco em texturas e linhas, sem pessoas, estética editorial de luxo." 

Parâmetros sugeridos (ajuste conforme a plataforma)
- Duração: 10 a 15 segundos por clip.
- Resolução: 1920x1080 (16:9) ou 2560x1440 para mais nitidez.
- FPS: 24 fps (look cinematográfico).
- Movimento: "Cinematic"/"Dolly"/"Pan" suave.
- Seed: fixe um seed para reprodutibilidade; gere 3–5 variações e escolha a melhor.
- Negativos: "sem pessoas", "sem marcas", "sem placas de carros", "sem texto".

Loop suave (opções)
- Mantenha movimentos simétricos (ex.: pan esquerda→direita com retorno) OU
- Na edição, faça crossfade entre final e início (200–300ms) para emular loop.

Pós-produção (opcional)
- Color grading sutil para unir os clips (curvas/tons quentes suaves).
- Granulação leve (film grain 5–8%).
- Mixar 2–3 clips com match cuts (água → vidro) para uma narrativa discreta.

Entrega e Integração no site
1) Exportar MP4 H.264 (10–15s, 24 fps); nome: public/hero/biavati-hero.mp4
2) Definir no .env.local:
   - NEXT_PUBLIC_HERO_MEDIA_URL="/hero/biavati-hero.mp4" (ou YouTube/Vimeo)
   - NEXT_PUBLIC_HERO_VIDEO_POSTER="/images/biavati/poster-hero.jpg" (opcional)
3) O site detecta automaticamente MP4/YouTube/Vimeo e aplica autoplay + mute + loop.

Observação de direitos autorais
- O vídeo deve ser original. Use o site de referência apenas como inspiração de clima/estética, sem copiar imagens/trechos específicos.

\nSeção Biavati — Prompts específicos por local
1) Caiobá — faixa de areia e encontro com rochas
- "Plano aéreo baixo em câmera lenta sobre a orla de Caiobá, ondas suaves encontrando rochas arredondadas, areia clara, luz do fim de tarde (golden hour), estética editorial minimalista, paleta neutra com dourado sutil, foco em linhas da espuma e texturas das pedras, sem pessoas, sem marcas. 24 fps, DOF sutil, granulação leve."

2) Pontal do Sul — casas pé na areia
- "Sobrevoo cinematográfico em câmera lenta em Pontal do Sul, casas pé na areia de arquitetura contemporânea, água com reflexos dourados, movimento de câmera fluido e discreto, atmosfera de exclusividade, paleta neutra, sem pessoas, sem marcas ou placas. 24 fps, equilíbrio de cor natural, granulação leve."

3) Ilha do Mel — textura da água (para match cut)
- "Close-up da superfície do mar na Ilha do Mel, brilhos dourados no entardecer, ondas pequenas formando padrões minimalistas, composição abstrata e elegante, perfeita para transição (match cut) para vidro/arquitetura, sem pessoas, sem texto. 24 fps, câmera estável, leve granulação."

4) Curitiba — fachada contemporânea (Batel/Ecoville)
- "Movimento de dolly lento por fachada contemporânea envidraçada em Curitiba (região Batel/Ecoville), linhas verticais limpas, reflexos do céu, concreto e vidro com estética minimalista, paleta neutra e dourado sutil, sensação de precisão e luxo discreto, sem marcas e sem pessoas. 24 fps, DOF sutil, granulação leve."

5) Transição água → vidro (roteiro de edição)
- Gere os clipes 3 e 4. Em edição, inicie no close da água (Ilha do Mel), corte por similaridade de textura/luz para o reflexo no vidro (Curitiba). Use crossfade curto (200–300ms) e ajuste de cor para unir as cenas.

Parâmetros recomendados (repetição)
- Duração por clipe: 10–15s (exporte variações de 8–12s se quiser loops mais rápidos).
- FPS: 24 fps. Resolução: 1920x1080 ou 2560x1440.
- Negativos: "sem pessoas", "sem marcas", "sem placas", "sem texto", "sem logos".
- Variações: fixe seed e gere 3–5 variações; selecione a mais limpa.

Color grading sugerido
- Temperatura levemente quente (+200 a +350 K), contraste moderado, realce suave nos highlights (evitar clipping), granulação filme 5–8%.

Entrega final sugerida
- Versão única (10–15s) que comece no mar (Caiobá/Ilha do Mel) e termine em arquitetura (Curitiba), com loop suave via crossfade. Nome: `public/hero/biavati-hero.mp4`.
