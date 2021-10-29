import React from 'react';

import ToggleSwitch from './ToggleSwitch';
import RadioGroup from './RadioGroup';

export const QuizzesSettings = () => {
    const [enabled, setEnabled] = React.useState(false);

    return (
        <div>
            <label>
                <ToggleSwitch label="Quizzes" onChange={(checked) => setEnabled(checked)} />
            </label>

            <RadioGroup
                name="quiz-difficulty"
                buttons={['Beginner', 'Advanced']}
                defaultChecked={0}
                disabled={!enabled}
            />
        </div>
    );
};

export default QuizzesSettings;
