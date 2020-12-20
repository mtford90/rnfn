# todo
- Instead of snapshot testing, isolate the creation of the list of styles? Snapshot testing is wank.
- Instead of StyleSheet tuple, use a single key object.

# backlog
- Integrate with size matters
- Also allow string style classes ala tailwind
- Also allow passing functions to dynamically define the style (either to class or to the individual params)
- Allow falsy values so can do e.g. state && "md"

# ideas
- string interpolation typescript to generate the types from config?
- metro plugin to generate types from the config
- size matters normalisation to make app development even easier - i can use their awesome notation e.g. 100@s to scale linearly
