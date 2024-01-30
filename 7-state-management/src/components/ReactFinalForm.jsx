import { Form, Field } from "react-final-form"

const required = (value) => value ? undefined : "Mandatory field."

const mustBeNumber = (value) => isNaN(value) ? "Must be a number" : undefined

const minValue = (min) => (value, allValues) => {
    if(allValues.parent) {
        return undefined
    }
    
    return isNaN(value) || value >= min ? undefined : `Must be higher than ${min}`
}

function composeValidators(...validators) {
    return (...args) => validators.reduce((error, validator) => error || validator(...args), undefined)
}

const ReactFinalForm = () => {
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name </label>
                        <Field name="firstname" validate={required}>
                            {({ input, meta }) => (
                                <>
                                    <input { ...input } type="text" placeholder="Name..." />
                                    {(meta.error && meta.touched) && (<p>{meta.error}</p>)}
                                </>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name </label>
                        <Field name="lastname" validate={required}>
                            {({ input, meta }) => (
                                <>
                                    <input { ...input } type="text" placeholder="Surname..." />
                                    {(meta.error && meta.touched) && (<p>{meta.error}</p>)}
                                </>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail </label>
                        <Field name="email" validate={required}>
                            {({ input, meta }) => (
                                <>
                                    <input { ...input } type="email" placeholder="Email..." />
                                    {(meta.error && meta.touched) && (<p>{meta.error}</p>)}
                                </>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="age">Age </label>
                        <Field name="age" validate={composeValidators(required, mustBeNumber, minValue(18))}>
                            {({ input, meta }) => (
                                <>
                                    <input { ...input } type="text" placeholder="Your age..." />
                                    {(meta.error && meta.touched) && (<p>{meta.error}</p>)}
                                </>
                            )}
                        </Field>
                    </div>
                    {values.age && values.age < 18 && (
                        <div>
                            <label htmlFor="parent">Parent name </label>
                            <Field name="parent" validate={required}>
                                {({ input, meta }) => (
                                    <>
                                        <input { ...input } type="text" placeholder="Your parent..." />
                                        {(meta.error && meta.touched) && (<p>{meta.error}</p>)}
                                    </>
                                )}
                            </Field>
                        </div>
                    )}
                    <div>
                        <input type="submit" value="Send" disabled={ submitting || pristine } />
                        <button onClick={form.reset}>Reset</button>
                    </div>
                </form>
            )}
        />
    )
}

export default ReactFinalForm