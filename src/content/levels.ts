/**
 * The Seven Levels Framework: one entry per level, in order. Each level has
 * its own page at `/seven-levels/<slug>/` (src/pages/seven-levels/[level].astro)
 * and a petal in the mandala (src/components/Mandala.astro).
 *
 * Always "levels". Colours are the brand's level colours: use them as fills
 * and swatches, with dark text beside them (several are below 4.5:1 on white).
 */

export interface Level {
  slug: string;
  number: number;
  name: string;
  color: string;
  /** The guiding question, shown everywhere the level appears. */
  question: string;
  /** One sentence for lists and meta descriptions. */
  summary: string;
  explores: string[];
  showsUp: string[];
  reflect: string[];
  practice: {title: string; body: string};
  practitioners: string;
}

export const LEVELS: Level[] = [
  {
    slug: 'space',
    number: 1,
    name: 'Space',
    color: '#E60012',
    question: 'What room does this conflict need?',
    summary: 'The conditions around a conflict: time, place, pace and the room we give ourselves and one another.',
    explores: [
      'Space is where every conflict begins and where it is held. Before a single word is spoken, the setting is already shaping what can happen: the room, the hour, the screen between us, the time we have, and the inner spaciousness we bring.',
      'At this level we notice the container. A hard conversation squeezed into five minutes between meetings is a different conversation from the same words offered with time, privacy and quiet. Much of what we call conflict is a conflict of conditions.',
    ],
    showsUp: [
      'Conversations that keep happening at the worst possible moment',
      'A sense of being crowded, rushed or watched',
      'Messages answered too quickly, or not answered at all',
      'No pause between what happened and how we respond',
    ],
    reflect: [
      'Where and when does this conflict tend to surface?',
      'What would change if there were more time, or less?',
      'How much inner room do we have right now to stay with what is difficult?',
    ],
    practice: {
      title: 'Choose the room',
      body: 'Before the next difficult conversation, we might pause to ask three quiet questions: Is this the right place? Is this the right time? Is there enough room in me to listen? If the answer to any of them is no, what would it take to make it yes?',
    },
    practitioners:
      'For mediators, coaches and ombuds, Space is the design of process itself: scheduling, setting, caucus, pacing and the felt safety of a session. Attending to it first often makes every other level easier to reach.',
  },
  {
    slug: 'emotions',
    number: 2,
    name: 'Emotions',
    color: '#F47324',
    question: 'What is this feeling trying to tell us?',
    summary: 'Feelings as information: what arises in us and in others when conflict appears, and what it is pointing toward.',
    explores: [
      'Emotions are often treated as the problem in conflict, something to be managed, calmed or kept out of the room. At this level we approach them differently, as signals carrying information about what matters.',
      'Anger may point toward a boundary. Fear may point toward something precious that feels at risk. Grief may point toward a loss that has not yet been named. When we can listen to emotion rather than only react to it, the conflict begins to speak more clearly.',
    ],
    showsUp: [
      'A reaction that feels larger than the moment',
      'Feeling flooded, frozen or suddenly very calm',
      'Emotions in others that seem to come from nowhere',
      'Old feelings arriving with a new situation',
    ],
    reflect: [
      'What am I feeling, and where do I feel it in my body?',
      'If this feeling could speak, what might it be asking for?',
      'What might the other person be feeling that they have not said?',
    ],
    practice: {
      title: 'Name it to know it',
      body: 'When a strong feeling arrives, we might simply name it, silently or aloud: “There is frustration here.” Then a second, gentler question: “What does this frustration care about?” Naming does not fix anything. It creates a little distance, and in that distance, choice.',
    },
    practitioners:
      'Practitioners work with emotion constantly. This level offers a shared language for acknowledging feeling without being swept by it, and for helping parties hear the needs inside one another’s reactions.',
  },
  {
    slug: 'identity',
    number: 3,
    name: 'Identity',
    color: '#B99C0A',
    question: 'What part of who I am feels at stake?',
    summary: 'Who we believe we are, how we wish to be seen, and what feels threatened when conflict touches our sense of self.',
    explores: [
      'Many conflicts that look like disagreements about facts are, underneath, conversations about identity. Am I competent? Am I a good parent, a fair leader, a kind person? When a conflict touches these questions, it can feel like everything is on the line.',
      'At this level we gently explore the stories we hold about ourselves and others, the roles we play, and the belonging we long for. Seeing what feels at stake often softens what felt impossible.',
    ],
    showsUp: [
      'Feeling personally attacked by what was meant as feedback',
      'A need to be right that is hard to set down',
      'Conflicts that circle around roles, titles or recognition',
      'Feeling unseen, mislabelled or misunderstood',
    ],
    reflect: [
      'What would it mean about me if I were wrong here?',
      'Which story about myself is this conflict touching?',
      'What might the other person need to feel seen?',
    ],
    practice: {
      title: 'The story beneath the story',
      body: 'We might write one sentence that begins, “This conflict makes me worry that I am…” and then another that begins, “What I would like to be true about me is…” Holding both sentences side by side can reveal what the conflict is really about.',
    },
    practitioners:
      'Identity is often the hidden driver of impasse. This level gives practitioners ways to recognize face-saving, role conflict and threatened belonging, and to make room for them without shaming anyone.',
  },
  {
    slug: 'relationships',
    number: 4,
    name: 'Relationships',
    color: '#419A5C',
    question: 'What is happening between us, not only within us?',
    summary: 'The patterns, history, trust and power that live between people and shape every conflict they share.',
    explores: [
      'Conflict rarely belongs to one person. It lives in the space between people, in their history, their habits of responding to one another, the trust they have built or lost, and the power each holds.',
      'At this level we look at the dance rather than the dancers. What pattern repeats? Who usually moves first? What has gone unspoken for a long time? Seeing the pattern is often the first step toward changing it.',
    ],
    showsUp: [
      'The same argument with the same person, again and again',
      'A sense that history is in the room before anyone speaks',
      'Imbalances of power that make honesty feel risky',
      'Distance growing quietly where there was once closeness',
    ],
    reflect: [
      'What pattern do we fall into when this conflict appears?',
      'What do I contribute to that pattern, even unintentionally?',
      'What would one small, different move look like?',
    ],
    practice: {
      title: 'Map the dance',
      body: 'We might sketch the last three times this conflict appeared: what happened first, how each person responded, and how it ended. Looking at the map, we can ask where a single different step might change the whole sequence.',
    },
    practitioners:
      'For practitioners, this level brings systemic thinking into the room: relational patterns, power dynamics and the history parties carry. It supports work that tends the relationship as well as the issue.',
  },
  {
    slug: 'expression',
    number: 5,
    name: 'Expression',
    color: '#51A8E7',
    question: 'What wants to be said, and how might it be heard?',
    summary: 'How we speak and listen in conflict: words, tone, silence and the courage to say what matters.',
    explores: [
      'Expression is where inner experience meets the world. It includes what we say and how we say it, what we leave unsaid, and how well we listen to what others are trying to express.',
      'At this level we explore honest speech that does not wound and listening that does not wait to reply. We also explore silence: when it protects, and when it becomes its own kind of conflict.',
    ],
    showsUp: [
      'Words that land very differently from how they were meant',
      'Holding back what matters to keep the peace',
      'Conversations where everyone speaks and no one feels heard',
      'Messages in writing that escalate quickly',
    ],
    reflect: [
      'What have I not yet said that wants to be said?',
      'How might I say it so that it can be received?',
      'When did I last listen only to understand?',
    ],
    practice: {
      title: 'One true sentence',
      body: 'Before a difficult conversation, we might write the one sentence we most need the other person to hear, then rewrite it until it is both honest and kind. Then a second sentence: the one we most need to hear from them.',
    },
    practitioners:
      'This level supports the core craft of mediation and coaching: reframing, reflective listening, the structure of a hard conversation and helping each person speak in a way the other can take in.',
  },
  {
    slug: 'intuition',
    number: 6,
    name: 'Intuition',
    color: '#6075AB',
    question: 'What do we sense before we can explain it?',
    summary: 'The quieter knowing in conflict: hunches, patterns and the signals that arrive before words do.',
    explores: [
      'Often we know something is wrong before we can say why. A meeting feels tense. A reply seems slightly off. A quiet voice suggests that the real issue is somewhere else entirely.',
      'At this level we learn to notice that quieter knowing, to take it seriously without treating it as certainty, and to check it with curiosity. Intuition is not the opposite of analysis. It is often analysis happening faster than words.',
    ],
    showsUp: [
      'A gut sense that a conflict is about to surface',
      'A hunch that the stated issue is not the real issue',
      'Unease that is easy to dismiss and hard to forget',
      'Sudden clarity during a walk, a shower or a quiet moment',
    ],
    reflect: [
      'What am I sensing that I have not yet put into words?',
      'How might I test this hunch with curiosity rather than certainty?',
      'When has my intuition served me well in conflict, and when has it misled me?',
    ],
    practice: {
      title: 'Listen, then check',
      body: 'When a hunch arrives, we might write it down without judging it. Later, we can look for one gentle way to check it: a question, an observation, an invitation to say more. Over time we learn which signals to trust.',
    },
    practitioners:
      'Experienced practitioners often rely on intuition without naming it. This level makes that knowing visible and teachable, and pairs it with practices that keep it honest.',
  },
  {
    slug: 'spirituality',
    number: 7,
    name: 'Spirituality',
    color: '#935EB2',
    question: 'What does this conflict mean in the larger story of our lives?',
    summary: 'Meaning, values and connection: how conflict touches what we hold most deeply, in any tradition or none.',
    explores: [
      'Spirituality here is not about a particular belief or tradition. It is about meaning: the values we live by, our sense of connection to others and to something larger than ourselves, and the question of who we are becoming.',
      'At this level we ask what a conflict might be inviting us to learn, forgive, release or stand for. Seen from here, even painful conflict can become part of a meaningful life rather than an interruption of it.',
    ],
    showsUp: [
      'A conflict that touches our deepest values',
      'Questions of forgiveness, fairness or repair',
      'A longing for peace that goes beyond agreement',
      'Wondering what this experience is asking us to become',
    ],
    reflect: [
      'Which of my deepest values does this conflict touch?',
      'What might this conflict be inviting me to learn or release?',
      'What would peace look like here, beyond simply ending the conflict?',
    ],
    practice: {
      title: 'A wider view',
      body: 'We might imagine looking back on this conflict ten years from now. What would we hope to have learned? How would we hope to have treated the people involved? The answers often point toward our next step today.',
    },
    practitioners:
      'For practitioners, this level opens space for meaning-making, values and repair, especially in conflicts where agreement alone will not bring peace. It is offered in a way that respects every faith and none.',
  },
];

export const levelHref = (level: Level) => `/seven-levels/${level.slug}/`;
