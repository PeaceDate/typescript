// Template literal types

// Example

type NewModifier = 'read' | 'write';
type Bulk = 'bulk' | '';

type AccessType = `can${Capitalize<NewModifier>}${Capitalize<Bulk>}`;

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type ReadOrWrite = ReadOrWriteBulk<AccessType>;