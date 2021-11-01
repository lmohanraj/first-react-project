export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "100px",
    width: "150px"
  };

  return (
    <div style={styles}></div>
  );
}
