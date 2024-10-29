DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database WHERE datname = 'developer'
   ) THEN
      PERFORM dblink_connect('dbname=postgres');
      PERFORM dblink_exec('CREATE DATABASE developer');
      PERFORM dblink_disconnect();
   END IF;
END
$$;