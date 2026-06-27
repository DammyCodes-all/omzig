# AGENTS.md

## Project

LectureLift

An AI-assisted learning environment that helps students understand difficult lecture materials by identifying friction points, teaching missing prerequisite concepts, and reinforcing understanding through guided quizzes.

---

# Product Identity

LectureLift is not a chatbot.

LectureLift is not a productivity tool.

LectureLift is not an admin dashboard.

LectureLift is a reading-first learning environment.

The lecture material is always the primary focus.

AI exists to support understanding, not dominate the interface.

The product should feel like a patient tutor sitting beside the student while they study.

---

# Core Experience

The fundamental workflow is:

Read

↓

Encounter confusion

↓

Understand the missing concept

↓

Reconnect it to the lecture

↓

Verify understanding

↓

Continue reading

Every feature should support this loop.

If a feature does not improve understanding, it should not be added.

---

# Design Philosophy

## Reading First

Reading is the primary interaction.

Most user time should be spent consuming and understanding content.

Optimize for:

* Readability
* Focus
* Comprehension
* Flow

Never optimize primarily for clicks, navigation, or engagement metrics.

---

## Calm Intelligence

The interface should feel:

* Focused
* Academic
* Helpful
* Professional
* Trustworthy

Avoid:

* Excessive visual noise
* Overly playful interactions
* Flashy marketing aesthetics
* Loud AI branding

---

## Progressive Disclosure

Show only what the user needs right now.

Reveal complexity gradually.

Prefer:

Explanation

↓

Example

↓

Quiz

Instead of displaying everything simultaneously.

---

## One Primary Goal

Every screen should have one obvious next action.

Users should never wonder where to focus next.

---

# Visual Identity

## Aesthetic

Academic Minimalism.

Visual references:

* Linear
* Notion
* NotebookLM
* Apple Education

Avoid styles inspired by:

* Crypto products
* Trading dashboards
* Gaming interfaces
* Generic AI wrappers

---

## Color System

### Brand Colors

Primary: Academic Gold

Secondary: Neutral Paper Tones

Gold represents:

* Discovery
* Learning
* Guidance
* Understanding

Black represents:

* Structure
* Clarity
* Trust

---

### Color Semantics

Gold

* Primary actions
* Learning interactions
* Important guidance

Confusion Highlight

* Areas requiring attention
* Missing prerequisite concepts
* Concept transitions

Red

* Errors only

Green

* Mastery
* Completion
* Correct understanding

Do not use red for confusion.

Confusion is an opportunity, not a mistake.

---

# Typography

## Heading Font

Sora

Used for:

* Titles
* Major section headers
* Important labels

Headings should feel confident and clear.

---

## Body Font

Source Sans 3

Used for:

* Reading content
* Explanations
* Quiz content
* Navigation

Readability always takes priority over stylistic expression.

---

## Monospace

JetBrains Mono

Used only for:

* Code
* Technical snippets
* Programming concepts

Never use monospace for general content.

---

# Layout Rules

## Content Priority

The document always owns the majority of screen space.

The assistant supports the document.

Never reverse this hierarchy.

The interface should feel like:

Document + Guidance

Not:

Chat + Document

---

## Desktop Layout

Preferred structure:

70% Content

30% Assistant

The assistant panel should never visually overpower the learning material.

---

## Spacing

Prefer generous whitespace.

When choosing between:

More content

or

More breathing room

Choose breathing room.

Whitespace improves comprehension.

---

## Surface Hierarchy

Use subtle depth.

Avoid dramatic visual separation.

The UI should feel layered, not stacked.

Cards should feel integrated into the experience.

---

# Motion System

Animation is a first-class design tool.

Motion should communicate meaning.

Motion should never exist purely for decoration.

---

## Motion Personality

Animations should feel:

* Calm
* Intentional
* Smooth
* Intelligent

Animations should not feel:

* Playful
* Bouncy
* Chaotic
* Attention-seeking

---

## Approved Motion Types

Fade

Slide

Reveal

Expand

Collapse

Subtle scale

Highlight pulse

---

## Motion Timing

Micro interactions:

150ms–250ms

Panel transitions:

250ms–400ms

Major transitions:

400ms–600ms

Avoid animations longer than 700ms.

---

## Motion Restrictions

Avoid:

* Infinite loops
* Floating effects
* Excessive parallax
* Constant movement
* Decorative animations

Motion should support comprehension.

---

# Confusion Detection UX

Confusion detection is the signature interaction.

It must feel helpful.

Never alarming.

Never resemble warnings or errors.

Users should feel:

"I found something important."

Not:

"I did something wrong."

---

## Confusion Highlight Behavior

Confusion indicators should:

* Draw attention softly
* Invite exploration
* Maintain reading flow

Avoid aggressive visual treatment.

---

# AI Experience

## AI Is A Tutor

The AI should behave like:

* A teaching assistant
* A patient tutor
* A knowledgeable study partner

The AI should not behave like:

* A generic chatbot
* A search engine
* A productivity assistant

---

## Explanations

Prefer:

* Plain language
* Concrete examples
* Practical intuition

Avoid:

* Unnecessary jargon
* Academic verbosity
* Long walls of text

---

## Learning Flow

Preferred structure:

Concept

↓

Simple explanation

↓

Example

↓

Connection to lecture

↓

Quiz

This structure should appear consistently throughout the product.

---

# Quiz Experience

Quizzes exist to reinforce understanding.

Not to score users.

Not to gamify learning.

Not to maximize engagement.

---

## Feedback

Every incorrect answer should teach.

A wrong answer is a learning opportunity.

Feedback should:

* Explain reasoning
* Address misconceptions
* Connect back to the lecture

---

# Component Guidelines

## Buttons

Primary buttons use Academic Gold.

There should rarely be multiple primary buttons visible within the same context.

---

## Cards

Cards should feel:

* Lightweight
* Helpful
* Unobtrusive

Avoid excessive nesting.

Avoid dashboard-style card grids.

---

## Hover States

Use subtle feedback.

Examples:

* Slight elevation
* Slight border emphasis
* Slight color shift

Avoid dramatic transformations.

---

## Empty States

Every empty state should guide the user toward the next meaningful action.

Empty states should never feel dead.

---

# Engineering Guidelines

Use design tokens.

Do not hardcode colors.

Do not hardcode spacing values repeatedly.

Prefer consistency over originality.

A familiar interaction implemented consistently is better than a clever interaction implemented once.

---

# Feature Filter

Before implementing any feature ask:

Does this improve understanding?

Does this reduce friction?

Does this preserve focus?

Would a student benefit from this while actively studying?

If any answer is no, do not build it.
