DROP TABLE IF EXISTS votes;
CREATE TABLE votes (
  id smallint,
  balance bigint,
  countFor bigint,
  countAgainst bigint
);

DO $$
BEGIN
  FOR i IN 1..1010 LOOP
    INSERT INTO votes VALUES(i, 0, 0, 0);
  END LOOP;
END;
$$;
