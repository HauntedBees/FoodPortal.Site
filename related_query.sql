SELECT DISTINCT
	c.ckey AS countryCode, c.name AS countryName, r.id, r.name, d.name AS dish, d.emoji AS dishEmoji,
	r.url, r.date, r.img, r.databee, r.description, r.favorite
FROM recipe r
	INNER JOIN country c ON r.country = c.id
    INNER JOIN dish d ON r.dish = d.id
	INNER JOIN recipe r2 ON r2.id <> r.id
WHERE r2.id = 2
ORDER BY
CASE
		WHEN r2.dish_detailed = r.dish_detailed THEN 2
		ELSE 0
	END
	+
	CASE
		WHEN r2.dish = r.dish THEN 1
		ELSE 0
	END
DESC
LIMIT 3