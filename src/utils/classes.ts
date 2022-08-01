export default function classes(
  classNames: (string | object | undefined | false)[]
) {
  const result: string[] = classNames.map((className) => {
    if (!className) {
      return "";
    }

    if (typeof className === "object") {
      let classes: string[] = [];
      Object.keys(className).forEach((name) => {
        const isClassValid = (className as any)[name];

        classes.push(isClassValid ? name : "");
      });

      return classes.join(" ");
    }

    return className;
  });

  return result.join(" ");
}
